import { ContainerShapeType } from "../../../ldo/solid.shapeTypes";
import { DocumentError } from "../../errors/DocumentError";
import { DataResource } from "../dataResource/DataResource";
import { Resource } from "../../resource/Resource";
import { DocumentManager } from "../../DocumentManager";

export class ContainerResource extends DataResource {
  private _contains: Set<Resource> = new Set();

  /**
   * ===========================================================================
   * Getters
   * ===========================================================================
   */
  public contains(): Resource[] {
    return Array.from(this._contains);
  }

  /**
   * ===========================================================================
   * Methods
   * ===========================================================================
   */
  protected async fetchDocument(): Promise<DocumentError | undefined> {
    const error = await super.fetchDocument();
    if (error) {
      return error;
    }
    // Update the contains
    const container = this.documentManager.dataset
      .usingType(ContainerShapeType)
      .fromSubject(this.uri);
    const resourcesToAdd: Resource[] = [];
    container.contains?.forEach((resourceData) => {
      if (resourceData["@id"]) {
        resourcesToAdd.push(
          this.documentManager.getResource(resourceData["@id"])
        );
      }
    });
    this.addContainedResources(...resourcesToAdd);
  }

  public addContainedResources(...resources: Resource[]) {
    let someResourceUpdated = false;
    resources.forEach((resource) => {
      if (!this._contains.has(resource)) {
        someResourceUpdated = true;
        this._contains.add(resource);
        this.parentContainer?.addContainedResources(this);
      }
    });
    if (someResourceUpdated) {
      this.emitStateUpdate();
    }
  }

  public static getFromManager(uri: string, documentManager: DocumentManager) {
    return documentManager.getContainerResource(uri);
  }
}
