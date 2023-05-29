import { Resource } from "./Resource";
import { LdoDataset, createLdoDataset } from "ldo";

/**
 * Holds a map of resources
 */
export class ResourceManager {
  public authFetch: typeof fetch;
  public dataset: LdoDataset;
  private resourceMap: Record<string, Resource> = {};

  constructor(dataset?: LdoDataset, authFetch?: typeof fetch) {
    this.dataset = dataset || createLdoDataset();
    this.authFetch = authFetch || fetch;
  }

  getResource(uri: string) {
    if (!this.resourceMap[uri]) {
      this.resourceMap[uri] = new Resource(uri, this);
    }
    return this.resourceMap[uri];
  }
}
