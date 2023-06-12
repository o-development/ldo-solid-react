import { useMemo } from "react";
import { useLdoContext } from "../../LdoContext";
import { UseDocumentOptions, useDocument } from "../useDocument";
import { Resource } from "../resource/Resource";
import { AccessRules } from "./AccessRules";

export function useAccessRules(
  input: string | Resource,
  options?: UseDocumentOptions
): AccessRules {
  const { documentManager } = useLdoContext();
  const accessRules = useMemo(() => {
    // Load the resource
    return documentManager.getAccessRules(input);
  }, [input]);

  useDocument(accessRules, options);

  return accessRules;
}
