import { LdoDataset, createLdoDataset } from "ldo";
import { createContext, useContext } from "react";
import crossFetch from "cross-fetch";

const LdoContext = createContext<{ dataset: LdoDataset; fetch: typeof fetch }>({
  dataset: createLdoDataset(),
  fetch: crossFetch,
});

export const LdoContextProvider = LdoContext.Provider;
export const useLdoContext = () => useContext(LdoContext);
