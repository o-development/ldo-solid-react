import { LdoDataset, parseRdf } from "ldo";
import { DocumentError } from "../../errors/DocumentError";
import { Resource } from "../Resource";
import { quad as createQuad, namedNode } from "@rdfjs/data-model";
import { DatasetChanges } from "o-dataset-pack";
import { Quad } from "@rdfjs/types";
import { changesToSparqlUpdate } from "../../../util/changesToSparqlUpdate";

export class DataResource extends Resource {
  public async create() {
    // TODO
  }

  protected async fetchDocument(): Promise<DocumentError | undefined> {
    // Fetch the document using auth fetch
    const response = await this.documentManager.authFetch(this.uri, {
      headers: {
        accept: "text/turtle",
      },
    });
    // Handle Error
    if (response.status !== 200) {
      // TODO: Handle edge cases
      return new DocumentError(
        response.status,
        `Error fetching resource ${this.uri}`
      );
    }

    // Parse the incoming turtle into a dataset
    const rawTurtle = await response.text();
    let loadedDataset: LdoDataset;
    try {
      loadedDataset = await parseRdf(rawTurtle, {
        baseIRI: this.uri,
      });
    } catch (err) {
      if (typeof err === "object" && (err as Error).message) {
        return new DocumentError(500, (err as Error).message);
      }
      return new DocumentError(500, "Server returned poorly formatted Turtle");
    }

    // Start transaction
    const transactionalDataset =
      this.documentManager.dataset.startTransaction();
    const graphNode = namedNode(this.uri);
    // Destroy all triples that were once a part of this resouce
    loadedDataset.deleteMatches(undefined, undefined, undefined, graphNode);
    // Add the triples from the fetched item
    loadedDataset.forEach((quad) => {
      transactionalDataset.add(
        createQuad(quad.subject, quad.predicate, quad.object, graphNode)
      );
    });

    const changes = transactionalDataset.getChanges();
    this.documentManager.updateManager.notifyListenersOfChanges(changes);

    transactionalDataset.commit();
    return undefined;
  }

  public async update(
    changes: DatasetChanges<Quad>
  ): Promise<DocumentError | undefined> {
    this.beginWrite();
    // Convert changes to transactional Dataset
    const transactionalDataset =
      this.documentManager.dataset.startTransaction();
    changes.added?.forEach((quad) => transactionalDataset.add(quad));
    changes.removed?.forEach((quad) => transactionalDataset.delete(quad));

    // Commit data optimistically
    transactionalDataset.commit();
    this.documentManager.updateManager.notifyListenersOfChanges(changes);

    // Make request
    const sparqlUpdate = await changesToSparqlUpdate(changes);
    const response = await this.documentManager.authFetch(this.uri, {
      method: "PATCH",
      body: sparqlUpdate,
      headers: {
        "Content-Type": "application/sparql-update",
      },
    });
    if (response.status !== 200) {
      // Handle Error by rollback
      transactionalDataset.rollback();
      this.documentManager.updateManager.notifyListenersOfChanges(changes);
      this.endWrite(
        new DocumentError(response.status, `Problem writing to ${this.uri}`)
      );
      return;
    }
    this.endWrite();
  }
}
