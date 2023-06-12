import { LdoDataset } from "ldo";
import { createContext, useContext } from "react";
import { UpdateManager } from "./ldoHooks/helpers/UpdateManager";
import { DocumentManager } from "./document/DocumentManager";
import { DocumentError } from "./document/errors/DocumentError";

export interface LdoContextData {
  dataset: LdoDataset;
  fetch: typeof fetch;
  documentManager: DocumentManager;
  updateManager: UpdateManager;
  onDocumentError?: (documentError: DocumentError) => void;
}

// No default parameter is required as it will be set in the provider
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const LdoContext = createContext<LdoContextData>({});

export const LdoContextProvider = LdoContext.Provider;
export const useLdoContext = () => useContext(LdoContext);
