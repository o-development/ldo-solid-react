import { useEffect, useMemo } from "react";
import { useLdoContext } from "../LdoContext";
import { Resource } from "./Resource";
import { useForceUpdate } from "../util/useForceReload";

/**
 * Get a resource as well as information about the resource
 * @param uri The URI of the resource
 * @param options Special options. If "loadOnMount" is true, a fetch will be
 * made to fetch the resource when the component mounts.
 * @returns The resource, isLoading, didInitialFetch, error
 */
export function useResource(
  uri: string,
  options?: { loadOnMount: boolean }
): Resource {
  const { resourceManager } = useLdoContext();
  const resource = useMemo(() => {
    // Load the resource
    return resourceManager.getResource(uri);
  }, [uri]);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    // Set up the listener for state update
    function onStateUpdateCallback() {
      forceUpdate();
    }
    resource.onStateUpdate(onStateUpdateCallback);
    // Load the resource if load on mount is true
    if (options?.loadOnMount) {
      resource.fetch();
    }
    return () => resource.offStateUpdate(onStateUpdateCallback);
  }, []);

  return resource;
}
