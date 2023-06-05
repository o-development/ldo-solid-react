import React, {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
} from "react";
import { useSolidAuth } from "../../lib/SolidAuthProvider";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
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
        children
      ) : (
        <button onClick={loginCb}>Log In</button>
      )}
    </div>
  );
};

export default Layout;
