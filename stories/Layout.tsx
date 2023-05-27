import { FunctionComponent } from "react";
import Profile from "./Profile";

const Layout: FunctionComponent = () => {
  const isLoggedIn = false;

  return (
    <div>
      <h1>LDO Solid React Test</h1>
      {isLoggedIn ? (
        <Profile />
      ) : (
        <button>Log In</button>
      )}
    </div>
  );
}

export default Layout;
