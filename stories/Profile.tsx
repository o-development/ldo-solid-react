import React, { FunctionComponent } from "react";
import { useLdo, useResource, useSubject } from "../lib";
import { SolidProfileShapeShapeType } from "./ldo/solidProfile.shapeTypes";
import BlurTextInput from "./BlurTextInput";

const Profile: FunctionComponent = () => {
  const { startTransaction, commitTransaction } = useLdo();
  const webId = "https://jackson.solidcommunity.net/profile/card#me";
  const webIdResource = useResource(webId, {
    loadOnMount: true,
  });
  const [profile, profileError] = useSubject(SolidProfileShapeShapeType, webId);
  return (
    <div>
      <p>isLoading: {webIdResource.isLoading ? "true" : "false"}</p>
      <p>didInitialFetch: {webIdResource.didInitialFetch ? "true" : "false"}</p>
      <p>error: {webIdResource.error?.message || "No Error"}</p>
      {profileError ? (
        <p>Profile Error</p>
      ) : (
        <div>
          <h2>Profile</h2>
          <div>
            <label>Name:</label>
            <BlurTextInput
              value={profile.name || ""}
              onBlurText={async (text) => {
                const tProfile = startTransaction(profile);
                tProfile.name = text;
                await commitTransaction(tProfile);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );

  // if (webIdResource.isLoading) {
  //   return <p>Loading...</p>;
  // } else if (webIdResource.error) {
  //   return <p>Error Fetching Profile</p>;
  // } else if (profileError) {
  //   return <p>Error getting Profile</p>;
  // }

  // return (
  //   <div>
  //     <h2>Profile:</h2>
  //     <div>
  //       <label>Name:</label>
  //       <BlurTextInput
  //         value={profile.name || ""}
  //         onBlurText={async (text) => {
  //           const tProfile = startTransaction(profile);
  //           tProfile.name = text;
  //           await commitTransaction(tProfile);
  //         }}
  //       />
  //     </div>
  //   </div>
  // );
};

export default Profile;
