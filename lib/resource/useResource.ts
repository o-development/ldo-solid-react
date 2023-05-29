import { useEffect, useMemo, useState } from "react";
import { ResourceError } from "./ResourceError";
import { useLdoContext } from "../LdoContext";
import { Resource } from "./Resource";

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
): [
  resource: Resource,
  isLoading: boolean,
  didInitialFetch: boolean,
  error?: ResourceError
] {
  const { resourceManager } = useLdoContext();
  const resource = useMemo(() => {
    // Load the resource
    return resourceManager.getResource(uri);
  }, [uri]);
  const [isLoading, setIsLoading] = useState(resource.isLoading);
  const [didInitialFetch, setDidInitialFetch] = useState(
    resource.didInitialFetch
  );
  const [error, setError] = useState(resource.error);

  useEffect(() => {
    // Set up the listener for state update
    function onStateUpdateCallback() {
      setIsLoading(resource.isLoading);
      setDidInitialFetch(resource.didInitialFetch);
      setError(resource.error);
    }
    resource.onStateUpdate(onStateUpdateCallback);
    // Load the resource if load on mount is true
    if (options?.loadOnMount) {
      resource.fetch();
    }
    return () => resource.offStateUpdate(onStateUpdateCallback);
  }, []);

  return [resource, isLoading, didInitialFetch, error];
}
