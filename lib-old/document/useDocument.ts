import { useEffect } from "react";
import { useForceUpdate } from "../util/useForceReload";
import { Document } from "./Document";

export interface UseDocumentOptions {
  suppressLoadOnMount: boolean;
}

export function useDocument(document: Document, options?: UseDocumentOptions) {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    // Set up the listener for state update
    function onStateUpdateCallback() {
      forceUpdate();
    }
    document.onStateUpdate(onStateUpdateCallback);
    // Load the resource if load on mount is true
    if (!options?.suppressLoadOnMount) {
      document.read();
    }
    return () => document.offStateUpdate(onStateUpdateCallback);
  }, []);
}
