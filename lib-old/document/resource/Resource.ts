import { DocumentManager } from "../DocumentManager";
import { Document } from "../Document";
import { ContainerResource } from "./containerResource/ContainerResource";
import { DocumentError } from "../errors/DocumentError";

export abstract class Resource extends Document {
  public readonly uri: string;
  private parentContainerUri?: string;

  constructor(uri: string, documentManager: DocumentManager) {
    super(documentManager);
    this.uri = uri;
    this.parentContainerUri = Resource.getParentUri(this.uri);
  }

  /**
   * ===========================================================================
   * Getters
   * ===========================================================================
   */
  get accessRules() {
    return this.documentManager.getAccessRules(this);
  }

  get parentContainer(): ContainerResource | undefined {
    return this.parentContainerUri
      ? this.documentManager.getContainerResource(this.parentContainerUri)
      : undefined;
  }

  get ["@id"]() {
    return this.uri;
  }

  /**
   * ===========================================================================
   * Methods
   * ===========================================================================
   */

  async delete() {
    this.beginWrite();
    const response = await this.documentManager.authFetch(this.uri, {
      method: "DELETE",
    });
    if (response.status === 200) {
      this.endWrite();
      return;
    }
    this.endWrite(
      new DocumentError(response.status, `Could not delete ${this.uri}`)
    );
  }

  public static getFromManager(uri: string, documentManager: DocumentManager) {
    return documentManager.getResource(uri);
  }

  /**
   * ===========================================================================
   * Static Methods
   * ===========================================================================
   */

  /**
   * Takes in a URL and will normalize it to the document it's fetching
   */
  public static normalizeUri(uri: string) {
    const [strippedHashUri] = uri.split("#");
    return strippedHashUri;
  }

  /**
   * Returns the parent container URI
   */
  public static getParentUri(uri: string): string | undefined {
    const urlObject = new URL(uri);
    const pathItems = urlObject.pathname.split("/");
    if (
      pathItems.length < 2 ||
      (pathItems.length === 2 && pathItems[1].length === 0)
    ) {
      return undefined;
    }
    if (pathItems[pathItems.length - 1] === "") {
      pathItems.pop();
    }
    pathItems.pop();
    urlObject.pathname = `${pathItems.join("/")}/`;
    return urlObject.toString();
  }
}
