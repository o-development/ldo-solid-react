import { EventEmitter } from "events";
import { quad as createQuad, namedNode } from "@rdfjs/data-model";
import { ResourceError } from "./ResourceError";
import { ResourceManager } from "./ResourceManager";
import { DatasetChanges, serializedToDataset } from "o-dataset-pack";
import { Dataset, Quad } from "@rdfjs/types";
import { changesToSparqlUpdate } from "../util/changesToSparqlUpdate";

const STATE_UPDATE = "stateUpdate";

/**
 * Represents a Solid Rdf Resource and its status.
 * When something about a resource is updated, a "stateUpdated" event will be
 * called
 */
export class Resource extends EventEmitter {
  public readonly uri: string;
  private _isLoading = false;
  private _isWriting = false;
  private _didInitialFetch = false;
  private _error?: ResourceError;
  private readonly isContainer: boolean;
  private resourceManager: ResourceManager;

  constructor(uri: string, resourceManager: ResourceManager) {
    super();
    this.uri = ResourceManager.normalizeUri(uri);
    this.isContainer = this.uri.endsWith("/");
    this.resourceManager = resourceManager;
  }

  /**
   * ===========================================================================
   * Getters
   * ===========================================================================
   */
  get isLoading() {
    return this._isLoading;
  }

  get didInitialFetch() {
    return this._didInitialFetch;
  }

  get error() {
    return this._error;
  }

  get isWriting() {
    return this._isWriting;
  }

  /**
   * ===========================================================================
   * Methods
   * ===========================================================================
   */

  /**
   * Creates a resource if it doesn't exist
   */
  async create() {
    // TODO
  }

  /**
   * Fetches this document, loading its data
   */
  async retrieve() {
    this._isLoading = true;
    this.emit(STATE_UPDATE);
    const resourceError = await this.fetchDocument();
    this._isLoading = false;
    this._didInitialFetch = true;
    if (resourceError) {
      this._error = resourceError;
    }
    this.emit(STATE_UPDATE);
  }

  /**
   * Applies the changes to a file via SPARQL/Update
   * @param changes changes in triples added and removed
   */
  async update(changes: DatasetChanges<Quad>) {
    this._isWriting = true;
    this.emit(STATE_UPDATE);
    await this.applyUpdate(changes);
    this._isWriting = false;
    this.emit(STATE_UPDATE);
  }

  /**
   * Removes this document from the Pod
   */
  async delete() {
    // TODO
  }

  /**
   * Alternative for "retrieve"
   */
  async refresh() {
    return this.retrieve();
  }

  /**
   * Alternative for "retrieve"
   */
  async fetch() {
    return this.retrieve();
  }

  /**
   * Alternative for "update"
   */
  async patch(changes: DatasetChanges<Quad>) {
    return this.update(changes);
  }

  /**
   * ===========================================================================
   * Helpers
   * ===========================================================================
   */

  /**
   * Helper function to fetch the document, parse data and update the required
   * parties
   */
  private async fetchDocument(): Promise<ResourceError | undefined> {
    // Fetch the document using auth fetch
    const response = await this.resourceManager.authFetch(this.uri, {
      headers: {
        accept: "text/turtle",
      },
    });
    // Handle Error
    if (response.status !== 200) {
      // TODO: Handle edge cases
      return new ResourceError(
        response.status,
        `Error fetching resource ${this.uri}`
      );
    }

    // Parse the incoming turtle into a dataset
    const rawTurtle = await response.text();
    let loadedDataset: Dataset<Quad>;
    try {
      loadedDataset = await serializedToDataset(rawTurtle, {
        baseIRI: this.uri,
      });
    } catch (err) {
      if (typeof err === "object" && (err as Error).message) {
        return new ResourceError(500, (err as Error).message);
      }
      return new ResourceError(500, "Server returned poorly formatted Turtle");
    }

    // Start transaction
    const transactionalDataset =
      this.resourceManager.dataset.startTransaction();
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
    this.resourceManager.updateManager.notifyListenersOfChanges(changes);

    transactionalDataset.commit();
    return undefined;
  }

  /**
   * Helper function that applies a given patch
   */
  private async applyUpdate(changes: DatasetChanges<Quad>) {
    // Convert changes to transactional Dataset
    const transactionalDataset =
      this.resourceManager.dataset.startTransaction();
    changes.added?.forEach((quad) => transactionalDataset.add(quad));
    changes.removed?.forEach((quad) => transactionalDataset.delete(quad));

    // Commit data optimistically
    transactionalDataset.commit();
    this.resourceManager.updateManager.notifyListenersOfChanges(changes);

    // Make request
    const sparqlUpdate = await changesToSparqlUpdate(changes);
    const response = await this.resourceManager.authFetch(this.uri, {
      method: "PATCH",
      body: sparqlUpdate,
      headers: {
        "Content-Type": "application/sparql-update",
      },
    });
    if (response.status !== 200) {
      // Handle Error by rollback
      transactionalDataset.rollback();
      this.resourceManager.updateManager.notifyListenersOfChanges(changes);
    }
  }

  onStateUpdate(callback: () => void) {
    this.on(STATE_UPDATE, callback);
  }

  offStateUpdate(callback: () => void) {
    this.off(STATE_UPDATE, callback);
  }
}
