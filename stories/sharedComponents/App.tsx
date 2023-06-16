import React, { FunctionComponent, PropsWithChildren } from "react";
import Layout from "./Layout";
import { LdoProvider } from "../../lib/LdoProvider";
import { fetch } from "solid-authn-react-native";
import { SolidAuthProvider } from "../../lib/SolidAuthProvider";

const App: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <SolidAuthProvider>
      <LdoProvider fetch={fetch}>
        <Layout>{children}</Layout>
      </LdoProvider>
    </SolidAuthProvider>
  );
};

export default App;
