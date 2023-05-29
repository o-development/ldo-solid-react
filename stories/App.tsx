import React, { FunctionComponent } from "react";
import Layout from "./Layout";
import LdoProvider from "../lib/LdoProvider";
import { fetch } from "solid-authn-react-native";
import { SolidAuthProvider } from "../lib/SolidAuthProvider";

const App: FunctionComponent = () => {
  return (
    <SolidAuthProvider>
      <LdoProvider fetch={fetch}>
        <Layout />
      </LdoProvider>
    </SolidAuthProvider>
  );
};

export default App;
