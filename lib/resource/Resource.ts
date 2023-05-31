import { EventEmitter } from "events";
import { quad as createQuad, namedNode } from "@rdfjs/data-model";
import { ResourceError } from "./ResourceError";
import { ResourceManager } from "./ResourceManager";
import { serializedToDataset } from "o-dataset-pack";

const STATE_UPDATE = "stateUpdate";

/**
 * Represents a Solid Rdf Resource and its status.
 * When something about a resource is updated, a "stateUpdated" event will be
 * called
 */
export class Resource extends EventEmitter {
  public readonly uri: string;
  private _isLoading = false;
  private _didInitialFetch = false;
  private _error?: ResourceError;
  private resourceManager: ResourceManager;

  constructor(uri: string, resourceManager: ResourceManager) {
    super();
    this.uri = ResourceManager.normalizeUri(uri);
    this.resourceManager = resourceManager;
  }

  get isLoading() {
    return this._isLoading;
  }

  get didInitialFetch() {
    return this._didInitialFetch;
  }

  get error() {
    return this._error;
  }

  async fetch() {
    this._isLoading = true;
    this.emit(STATE_UPDATE);
    const response = await this.resourceManager.authFetch(this.uri, {
      headers: {
        accept: "text/turtle",
      },
    });
    this._isLoading = false;
    this._didInitialFetch = true;

    // Handle Error
    if (response.status !== 200) {
      // TODO: Handle edge cases
      this._error = new ResourceError(response.status, "Placeholder");
      this.emit(STATE_UPDATE);
      return;
    }

    const rawTurtle = await response.text();
    try {
      const loadedDataset = await serializedToDataset(rawTurtle, {
        baseIRI: this.uri,
      });

      const transactionalDataset =
        this.resourceManager.dataset.startTransaction();
      loadedDataset.forEach((quad) => {
        transactionalDataset.add(
          createQuad(
            quad.subject,
            quad.predicate,
            quad.object,
            namedNode(this.uri)
          )
        );
      });

      const changes = transactionalDataset.getChanges();
      this.resourceManager.updateManager.notifyListenersOfChanges(changes);

      transactionalDataset.commit();
      this.emit(STATE_UPDATE);
    } catch (error: unknown) {
      // TODO handle errors better
      this._error = new ResourceError(500);
    }
  }

  async refresh() {
    return this.fetch();
  }

  onStateUpdate(callback: () => void) {
    this.on(STATE_UPDATE, callback);
  }

  offStateUpdate(callback: () => void) {
    this.off(STATE_UPDATE, callback);
  }
}
