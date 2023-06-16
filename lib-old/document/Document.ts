import { EventEmitter } from "events";
import { DocumentError } from "./errors/DocumentError";
import { DocumentManager } from "./DocumentManager";

const STATE_UPDATE = "stateUpdate";

export abstract class Document extends EventEmitter {
  protected _isLoading = false;
  protected _isWriting = false;
  protected _didInitialFetch = false;
  protected _error?: DocumentError;
  protected documentManager: DocumentManager;

  constructor(documentManager: DocumentManager) {
    super();
    this.documentManager = documentManager;
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
  public async read() {
    this._isLoading = true;
    this.emitStateUpdate();
    const documentError = await this.fetchDocument();
    this._isLoading = false;
    this._didInitialFetch = true;
    if (documentError) {
      this._error = documentError;
      this.documentManager.onDocumentError &&
        this.documentManager.onDocumentError(documentError);
    }
    this.emitStateUpdate();
  }

  protected abstract fetchDocument(): Promise<DocumentError | undefined>;

  protected beginWrite() {
    this._isWriting = true;
    this.emitStateUpdate();
  }

  protected endWrite(error?: DocumentError) {
    if (error) {
      this._error = error;
      this.documentManager.onDocumentError &&
        this.documentManager.onDocumentError(error);
    }
    this._isWriting = false;
    this.emitStateUpdate();
  }

  public setError(error: DocumentError) {
    this._error = error;
    this.emitStateUpdate();
  }

  public makeUndefinitive(): void;

  private abstract getUndefinitieveErrorMessage 

  /**
   * Emitter Information
   */
  protected emitStateUpdate() {
    this.emit(STATE_UPDATE);
  }

  onStateUpdate(callback: () => void) {
    this.on(STATE_UPDATE, callback);
  }

  offStateUpdate(callback: () => void) {
    this.off(STATE_UPDATE, callback);
  }
}
