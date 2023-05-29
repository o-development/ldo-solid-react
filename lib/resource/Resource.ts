import { EventEmitter } from "events";
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
  private readonly uri: string;
  private _isLoading = false;
  private _didInitialFetch = false;
  private _error?: ResourceError;
  private resourceManager: ResourceManager;

  constructor(uri: string, resourceManager: ResourceManager) {
    super();
    this.uri = uri;
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
      const [strippedHashUri] = this.uri.split("#");
      const transactionDataset = await serializedToDataset(rawTurtle, {
        baseIRI: strippedHashUri,
      });
      console.log(transactionDataset.toString());
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
