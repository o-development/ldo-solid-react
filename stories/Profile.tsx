import React, { FunctionComponent } from "react";
// import { useLdo, useResource, useSubject } from "./hooks";
// import { SolidProfileShapeShapeType } from "./ldo/solidProfile.shapeTypes";
// import BlurTextInput from "./BlurTextInput";

const Profile: FunctionComponent = () => {
  return <div>Hi</div>;
  // const { startTransaction, commitTransaction } = useLdo();
  // const webId = "https://jackson.solidcommunity.net/profile/card#me";
  // const webIdResource = useResource(webId, { loadOnMount: true });
  // const [profile, profileError] = useSubject(SolidProfileShapeShapeType, webId);

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
