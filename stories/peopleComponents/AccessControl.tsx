import React, { FunctionComponent } from "react";
import { Resource } from "../../lib";

export interface AccessControlProps {
  resource: Resource;
}

const AccessControl: FunctionComponent<AccessControlProps> = ({ resource }) => {
  return (
    <div>
      <h3>Access Control</h3>
    </div>
  );
};

export default AccessControl;
