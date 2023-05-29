import { LdoDataset, createLdoDataset } from "ldo";
import { createContext, useContext } from "react";
import crossFetch from "cross-fetch";
import { ResourceManager } from "./resource/ResourceManager";

const LdoContext = createContext<{
  dataset: LdoDataset;
  fetch: typeof fetch;
  resourceManager: ResourceManager;
}>({
  dataset: createLdoDataset(),
  fetch: crossFetch,
  resourceManager: new ResourceManager(),
});

export const LdoContextProvider = LdoContext.Provider;
export const useLdoContext = () => useContext(LdoContext);
