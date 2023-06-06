import { LdoDataset, createLdoDataset } from "ldo";
import { createContext, useContext } from "react";
import crossFetch from "cross-fetch";
import { ResourceManager } from "./resource/ResourceManager";
import { UpdateManager } from "./ldoHooks/helpers/UpdateManager";

export interface LdoContextData {
  dataset: LdoDataset;
  fetch: typeof fetch;
  resourceManager: ResourceManager;
  updateManager: UpdateManager;
}

const LdoContext = createContext<LdoContextData>({
  dataset: createLdoDataset(),
  fetch: crossFetch,
  resourceManager: new ResourceManager(),
  updateManager: new UpdateManager(),
});

export const LdoContextProvider = LdoContext.Provider;
export const useLdoContext = () => useContext(LdoContext);
