import { useMemo } from "react";
import { useLdoContext } from "../../../LdoContext";
import { BinaryResource } from "./BinaryResource";
import { UseDocumentOptions, useDocument } from "../../useDocument";

export function useBinaryResource(
  uri: string,
  options?: UseDocumentOptions
): BinaryResource {
  const { documentManager } = useLdoContext();
  const binaryResource = useMemo(() => {
    // Load the resource
    return documentManager.getBinaryResource(uri);
  }, [uri]);

  useDocument(binaryResource, options);

  return binaryResource;
}
