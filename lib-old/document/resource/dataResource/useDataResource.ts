import { useMemo } from "react";
import { useLdoContext } from "../../../LdoContext";
import { DataResource } from "./DataResource";
import { UseDocumentOptions, useDocument } from "../../useDocument";

export function useResource(
  uri: string,
  options?: UseDocumentOptions
): DataResource {
  const { documentManager } = useLdoContext();
  const dataResource = useMemo(() => {
    // Load the resource
    return documentManager.getDataResource(uri);
  }, [uri]);

  useDocument(dataResource, options);

  return dataResource;
}
