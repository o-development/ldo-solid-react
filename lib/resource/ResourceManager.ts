import { UpdateManager } from "../ldoHooks/helpers/UpdateManager";
import { Resource } from "./Resource";
import { LdoDataset, createLdoDataset } from "ldo";

/**
 * Holds a map of resources
 */
export class ResourceManager {
  public authFetch: typeof fetch;
  public dataset: LdoDataset;
  public updateManager: UpdateManager;
  private resourceMap: Record<string, Resource> = {};

  constructor(
    dataset?: LdoDataset,
    authFetch?: typeof fetch,
    updateManager?: UpdateManager
  ) {
    this.dataset = dataset || createLdoDataset();
    this.authFetch = authFetch || fetch;
    this.updateManager = updateManager || new UpdateManager();
  }

  public static normalizeUri(uri: string) {
    const [strippedHashUri] = uri.split("#");
    return strippedHashUri;
  }

  getResource(uriInput: string) {
    const uri = ResourceManager.normalizeUri(uriInput);
    if (!this.resourceMap[uri]) {
      this.resourceMap[uri] = new Resource(uri, this);
    }
    return this.resourceMap[uri];
  }
}
