import { LdoDataset, createLdoDataset } from "ldo";
import { createContext, useContext } from "react";
import crossFetch from "cross-fetch";
import { ResourceManager } from "./resource/ResourceManager";
import { UpdateManager } from "./ldoHooks/UpdateManager";

const LdoContext = createContext<{
  dataset: LdoDataset;
  fetch: typeof fetch;
  resourceManager: ResourceManager;
  updateManager: UpdateManager;
}>({
  dataset: createLdoDataset(),
  fetch: crossFetch,
  resourceManager: new ResourceManager(),
  updateManager: new UpdateManager(),
});

export const LdoContextProvider = LdoContext.Provider;
export const useLdoContext = () => useContext(LdoContext);
