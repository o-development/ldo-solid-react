import { Document } from "../Document";
import { DocumentError } from "../errors/DocumentError";
import { DocumentManager } from "../DocumentManager";
import { Resource } from "../resource/Resource";

import {
  universalAccess,
  AccessModes as IAccessModes,
} from "@inrupt/solid-client";

export type AccessModes = IAccessModes;

export class AccessRules extends Document {
  public readonly resource: Resource;
  private _publicAccess: AccessModes | null = null;
  private _agentAccess: Record<string, AccessModes> | null = null;

  constructor(resource: Resource, documentManager: DocumentManager) {
    super(documentManager);
    this.resource = resource;
  }

  /**
   * ===========================================================================
   * Getters
   * ===========================================================================
   */
  get publicAccess() {
    return this._publicAccess;
  }

  get agentAccess() {
    return this._agentAccess;
  }

  /**
   * ===========================================================================
   * Methods
   * ===========================================================================
   */
  protected async fetchDocument(): Promise<DocumentError | undefined> {
    const [publicAccess, agentAccess] = await Promise.all([
      universalAccess.getPublicAccess(this.resource.uri, {
        fetch: this.documentManager.authFetch,
      }),
      universalAccess.getAgentAccessAll(this.resource.uri, {
        fetch: this.documentManager.authFetch,
      }),
    ]);

    this._publicAccess = publicAccess || {
      read: false,
      write: false,
      append: false,
      controlRead: false,
      controlWrite: false,
    };
    this._agentAccess = agentAccess || {};
    return undefined;
  }

  // TODO Document update
}
