import React, { useEffect } from "react";
import { Dataset } from "@rdfjs/types";
import { createLdoDataset } from "ldo";
import { FunctionComponent, PropsWithChildren, useMemo } from "react";
import crossFetch from "cross-fetch";
import { LdoContextData, LdoContextProvider } from "./LdoContext";
import { UpdateManager } from "./ldoHooks/helpers/UpdateManager";
import { DocumentManager } from "./document/DocumentManager";
import { DocumentError } from "./document/DocumentError";

export interface LdoProviderProps extends PropsWithChildren {
  fetch?: typeof fetch;
  dataset?: Dataset;
  onDocumentError?: LdoContextData["onDocumentError"];
}

/**
 * Main Ldo Provider
 */
const LdoProvider: FunctionComponent<LdoProviderProps> = ({
  dataset,
  fetch,
  onDocumentError,
  children,
}) => {
  const finalFetch = useMemo(() => fetch || crossFetch, [fetch]);
  const ldoDataset = useMemo(() => createLdoDataset(dataset), [dataset]);
  const updateManager = useMemo(() => new UpdateManager(), []);
  const documentManager = useMemo(
    () => new DocumentManager(finalFetch, updateManager, ldoDataset),
    []
  );
  // Update the resource manager in case fetch or ldo dataset changes
  useEffect(() => {
    documentManager.authFetch = finalFetch;
    documentManager.dataset = ldoDataset;
    documentManager.onDocumentError = onDocumentError;
  }, [finalFetch, ldoDataset, onDocumentError]);

  const providerValue = useMemo(
    () => ({
      fetch: finalFetch,
      dataset: ldoDataset,
      updateManager,
      documentManager,
      onDocumentError,
    }),
    [finalFetch, ldoDataset]
  );

  return (
    <LdoContextProvider value={providerValue}>{children}</LdoContextProvider>
  );
};

export default LdoProvider;
