import React, { FunctionComponent, useCallback } from "react";
import Profile from "./Profile";
import { useSolidAuth } from "../lib/SolidAuthProvider";

const Layout: FunctionComponent = () => {
  const { login, session } = useSolidAuth();

  const loginCb = useCallback(async () => {
    const issuer = prompt(
      "Enter your Pod Provider",
      "https://solidcommunity.net"
    );
    if (issuer) {
      await login(issuer);
    }
  }, []);

  return (
    <div>
      <h1>LDO Solid React Test</h1>
      {session.isLoggedIn ? (
        <Profile />
      ) : (
        <button onClick={loginCb}>Log In</button>
      )}
    </div>
  );
};

export default Layout;
