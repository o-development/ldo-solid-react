import { LdoDataset } from "ldo";
import { UpdateManager } from "../ldoHooks/helpers/UpdateManager";
import { Resource } from "./resource/Resource";
import { AccessRules } from "./accessRules/AccessRules";
import { BinaryResource } from "./resource/binaryResource/BinaryResource";
import { ContainerResource } from "./resource/containerResource/ContainerResource";
import { DataResource } from "./resource/dataResource/DataResource";
import { LdoContextData } from "../LdoContext";
import { DocumentError } from "./errors/DocumentError";

// List of resources in the order that they will be evaluated. If any new
// resource types are added they should alway precede the type that they extend
// for example, "ContainerResource" precedes "DataResource"
const resourceTypes = [ContainerResource, DataResource, BinaryResource];

export class DocumentManager {
  public authFetch: typeof fetch;
  public updateManager: UpdateManager;
  public onDocumentError?: LdoContextData["onDocumentError"];
  public dataset: LdoDataset;

  private definitiveResourceMap: Record<string, Resource> = {};
  private specificResourceMaps: Map<typeof Resource, Record<string, Resource>>;
  private dataResourceMap: Record<string, DataResource> = {};
  private containerResourceMap: Record<string, ContainerResource> = {};
  private binaryResourceMap: Record<string, BinaryResource> = {};
  private accessRulesMap: Record<string, AccessRules> = {};

  constructor(
    authFetch: typeof fetch,
    updateManager: UpdateManager,
    dataset: LdoDataset,
    onDocumentError?: LdoContextData["onDocumentError"]
  ) {
    this.authFetch = authFetch;
    this.updateManager = updateManager;
    this.dataset = dataset;
    this.onDocumentError = onDocumentError;
    this.specificResourceMaps = new Map();
    resourceTypes.forEach((resourceType) => {
      this.specificResourceMaps.set(resourceType, {});
    });
  }

  public setDefinitiveResource(resource: Resource) {
    let definitiveResourceSet = false;
    resourceTypes.forEach((resourceType) => {
      if (!definitiveResourceSet && resource instanceof resourceType) {
        this.definitiveResourceMap[resource.uri] = resource;
        definitiveResourceSet = true;
      } else {
        const map = this.specificResourceMaps.get(resourceType) as Record<
          string,
          Resource
        >;
        map[resource.uri].setError(new DocumentError(400, ""));
      }
    });
  }

  // public static normalizeUri(uri: string) {
  //   const [strippedHashUri] = uri.split("#");
  //   return strippedHashUri;
  // }

  // public static getParentUri(uri: string): string | undefined {
  //   const urlObject = new URL(uri);
  //   const pathItems = urlObject.pathname.split("/");
  //   if (
  //     pathItems.length < 2 ||
  //     (pathItems.length === 2 && pathItems[1].length === 0)
  //   ) {
  //     return undefined;
  //   }
  //   if (pathItems[pathItems.length - 1] === "") {
  //     pathItems.pop();
  //   }
  //   pathItems.pop();
  //   urlObject.pathname = `${pathItems.join("/")}/`;
  //   return urlObject.toString();
  // }

  getResource(uriInput: string): Resource {}

  getDataResource(uriInput: string): DataResource {
    throw new Error("Not Implemented");
  }

  getBinaryResource(uriInput: string): BinaryResource {
    throw new Error("Not Implemented");
  }

  getContainerResource(uriInput: string): ContainerResource {
    throw new Error("Not Implemented");
  }

  getAccessRules(resource: Resource | string): AccessRules {
    throw new Error("Not Implemented");
  }
}
