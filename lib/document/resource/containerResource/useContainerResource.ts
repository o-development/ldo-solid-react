import { useMemo } from "react";
import { useLdoContext } from "../../../LdoContext";
import { ContainerResource } from "./ContainerResource";
import { UseDocumentOptions, useDocument } from "../../useDocument";

export function useContainerResource(
  uri: string,
  options?: UseDocumentOptions
): ContainerResource {
  const { documentManager } = useLdoContext();
  const containerResource = useMemo(() => {
    // Load the resource
    return documentManager.getContainerResource(uri);
  }, [uri]);

  useDocument(containerResource, options);

  return containerResource;
}
