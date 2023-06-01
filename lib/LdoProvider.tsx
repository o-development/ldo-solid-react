import React, { useEffect } from "react";
import { Dataset } from "@rdfjs/types";
import { createLdoDataset } from "ldo";
import { FunctionComponent, PropsWithChildren, useMemo } from "react";
import crossFetch from "cross-fetch";
import { LdoContextProvider } from "./LdoContext";
import { ResourceManager } from "./resource/ResourceManager";
import { UpdateManager } from "./ldoHooks/helpers/UpdateManager";

export interface LdoProviderProps extends PropsWithChildren {
  fetch?: typeof fetch;
  dataset?: Dataset;
}

const updateManager = new UpdateManager();
const resourceManager = new ResourceManager(
  undefined,
  undefined,
  updateManager
);

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
      value={{
        dataset: ldoDataset,
        fetch: finalFetch,
        resourceManager,
        updateManager,
      }}
    >
      {children}
    </LdoContextProvider>
  );
};

export default LdoProvider;
