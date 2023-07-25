import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ISessionInfo,
  handleIncomingRedirect,
  login as libraryLogin,
  getDefaultSession,
  logout as libraryLogout,
  fetch as libraryFetch,
} from "solid-authn-react-native";

import { createGlobalHook } from "./util/createGlobalHook";

interface AuthGlobalHookReturn {
  runInitialAuthCheck: () => Promise<void>;
  login: (issuer: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (issuer: string) => Promise<void>;
  fetch: typeof fetch;
  session: ISessionInfo;
  ranInitialAuthCheck: boolean;
}

function useAuthGlobalHookFunc(): AuthGlobalHookReturn {
  const [session, setSession] = useState<ISessionInfo>(
    getDefaultSession().info
  );
  const [ranInitialAuthCheck, setRanInitialAuthCheck] = useState(false);

  const runInitialAuthCheck = useCallback(async () => {
    await handleIncomingRedirect({
      restorePreviousSession: true,
    });
    setSession({ ...getDefaultSession().info });
    setRanInitialAuthCheck(true);
  }, []);

  const login = useCallback(
    async (issuer: string, clientName = "Solid App") => {
      await libraryLogin({
        oidcIssuer: issuer,
        // TODO: this ties this to in-browser use
        redirectUrl: window.location.href,
        clientName,
      });
      setSession({ ...getDefaultSession().info });
    },
    []
  );

  const logout = useCallback(async () => {
    await libraryLogout();
    setSession({ ...getDefaultSession().info });
  }, []);

  const signUp = useCallback(async (issuer: string) => {
    /* Do nothing for now */
    console.log(`Signup Pressed with issuer ${issuer}`);
  }, []);

  useEffect(() => {
    runInitialAuthCheck();
  }, []);

  return useMemo(
    () => ({
      runInitialAuthCheck,
      login,
      logout,
      signUp,
      session,
      ranInitialAuthCheck,
      fetch: libraryFetch,
    }),
    [login, logout, ranInitialAuthCheck, runInitialAuthCheck, session, signUp]
  );
}

const authGlobalHook = createGlobalHook(useAuthGlobalHookFunc);

export const SolidAuthContext = authGlobalHook.Context;
export const SolidAuthProvider = authGlobalHook.Provider;
export const useSolidAuth = authGlobalHook.useGlobal;
