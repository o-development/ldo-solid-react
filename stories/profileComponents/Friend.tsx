import React, { FunctionComponent } from "react";
import { useResource, useSubject } from "../../lib";
import { SolidProfileShapeShapeType } from "../ldo/solidProfile.shapeTypes";

interface FriendProps {
  uri: string;
  onRemove: () => void;
}

const Friend: FunctionComponent<FriendProps> = ({ uri, onRemove }) => {
  const friendResource = useResource(uri, { loadOnMount: true });
  const [friend, friendError] = useSubject(SolidProfileShapeShapeType, uri);

  return (
    <div style={{ border: "1px solid black", padding: 8, margin: 8 }}>
      {(() => {
        if (friendResource.isLoading) {
          return (
            <p>
              Loading... {friendResource.uri}{" "}
              <button onClick={onRemove}>Remove Friend</button>
            </p>
          );
        } else if (friendResource.error) {
          return (
            <p>
              Error Fetching Resource{" "}
              <button onClick={onRemove}>Remove Friend</button>
            </p>
          );
        } else if (friendError) {
          return <p>Error getting friend data</p>;
        }
        return (
          <>
            <p>Name: {friend.name}</p>
            <img
              src={friend.hasPhoto?.["@id"]}
              alt="Profile"
              style={{ height: 50 }}
            />
            <button onClick={onRemove}>Remove Friend</button>
          </>
        );
      })()}
    </div>
  );
};

export default Friend;
