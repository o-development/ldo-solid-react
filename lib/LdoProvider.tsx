import React from "react";
import { Dataset } from "@rdfjs/types";
import { createLdoDataset } from "ldo";
import { FunctionComponent, PropsWithChildren, useMemo } from "react";
import crossFetch from "cross-fetch";
import { LdoContextProvider } from "./LdoContext";

export interface LdoProviderProps extends PropsWithChildren {
  fetch?: typeof fetch;
  dataset?: Dataset;
}

const LdoProvider: FunctionComponent<LdoProviderProps> = ({
  dataset,
  fetch,
  children,
}) => {
  const ldoDataset = useMemo(() => createLdoDataset(dataset), [dataset]);
  const finalFetch = useMemo(() => fetch || crossFetch, [fetch]);

  return (
    <LdoContextProvider value={{ dataset: ldoDataset, fetch: finalFetch }}>
      {children}
    </LdoContextProvider>
  );
};

export default LdoProvider;
