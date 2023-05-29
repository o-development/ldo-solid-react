import React, { useEffect } from "react";
import { Dataset } from "@rdfjs/types";
import { createLdoDataset } from "ldo";
import { FunctionComponent, PropsWithChildren, useMemo } from "react";
import crossFetch from "cross-fetch";
import { LdoContextProvider } from "./LdoContext";
import { ResourceManager } from "./resource/ResourceManager";

export interface LdoProviderProps extends PropsWithChildren {
  fetch?: typeof fetch;
  dataset?: Dataset;
}

const resourceManager = new ResourceManager();

/**
 * Main Ldo Provider
 */
const LdoProvider: FunctionComponent<LdoProviderProps> = ({
  dataset,
  fetch,
  children,
}) => {
  const ldoDataset = useMemo(() => createLdoDataset(dataset), [dataset]);
  const finalFetch = useMemo(() => fetch || crossFetch, [fetch]);
  // Update the resource manager in case fetch or ldo dataset changes
  useEffect(() => {
    resourceManager.authFetch = finalFetch;
    resourceManager.dataset = ldoDataset;
  }, [finalFetch, ldoDataset]);

  return (
    <LdoContextProvider
      value={{ dataset: ldoDataset, fetch: finalFetch, resourceManager }}
    >
      {children}
    </LdoContextProvider>
  );
};

export default LdoProvider;
