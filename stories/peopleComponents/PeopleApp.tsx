import React, { FunctionComponent } from "react";
import App from "../sharedComponents/App";
import PeoplePanel from "./PeoplePanel";

const PeopleApp: FunctionComponent = () => {
  return (
    <App>
      <PeoplePanel />
    </App>
  );
};
export default PeopleApp;
