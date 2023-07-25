/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FunctionComponent } from "react";
import { useLdo, useDataResource, useSubject } from "../../lib";
import { SolidProfileShapeShapeType } from "../ldo/solidProfile.shapeTypes";
import BlurTextInput from "../sharedComponents/BlurTextInput";
import Friend from "./Friend";
import { SolidProfileShape } from "../ldo/solidProfile.typings";
import { useSolidAuth } from "../../lib/SolidAuthProvider";

const Profile: FunctionComponent = () => {
  const { changeData, commitData } = useLdo();
  const { session } = useSolidAuth();
  const webId = session.webId!;
  const webIdResource = useDataResource(webId);
  const [profile, profileError] = useSubject(SolidProfileShapeShapeType, webId);

  if (webIdResource.isLoading) {
    return <p>Loading</p>;
  } else if (profileError) {
    return <p>profileError.message</p>;
  } else {
    return (
      <div>
        <label>Name:</label>
        <BlurTextInput
          value={profile.name || ""}
          onBlurText={async (text) => {
            const cProfile = changeData(profile, webIdResource);
            cProfile.name = text;
            await commitData(cProfile);
          }}
        />
      </div>
    );
  }
};

export default Profile;

//   return (
//     <div>
//       <p>isLoading: {webIdResource.isLoading ? "true" : "false"}</p>
//       <p>didInitialFetch: {webIdResource.didInitialFetch ? "true" : "false"}</p>
//       <p>error: {webIdResource.error?.message || "No Error"}</p>
//       <hr />
//       {profileError ? (
//         <p>Profile Error</p>
//       ) : (
//         <div>
//           <h2>Profile</h2>
//           <div>
//             <label>Name:</label>
//             <BlurTextInput
//               value={profile.name || ""}
//               onBlurText={async (text) => {
//                 const cProfile = changeData(profile, webIdResource);
//                 cProfile.name = text;
//                 await commitData(cProfile);
//               }}
//             />
//           </div>
//           <div>
//             <h3>Friends</h3>
//             {profile.knows?.map((friend, index) => {
//               return (
//                 <Friend
//                   key={friend["@id"]}
//                   uri={friend["@id"] as string}
//                   onRemove={async () => {
//                     const cProfile = changeData(profile, webIdResource);
//                     cProfile.knows?.splice(index, 1);
//                     await commitData(cProfile);
//                   }}
//                 />
//               );
//             })}
//             <button
//               onClick={async () => {
//                 const friendWebId = prompt("Enter the Friend's WebId");
//                 if (friendWebId != null) {
//                   const cProfile = changeData(profile, webIdResource);
//                   cProfile.knows?.push({
//                     "@id": friendWebId,
//                   } as SolidProfileShape);
//                   await commitData(cProfile);
//                 }
//               }}
//             >
//               Add Friend
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   // if (webIdResource.isLoading) {
//   //   return <p>Loading...</p>;
//   // } else if (webIdResource.error) {
//   //   return <p>Error Fetching Profile</p>;
//   // } else if (profileError) {
//   //   return <p>Error getting Profile</p>;
//   // }

//   // return (
//   //   <div>
//   //     <h2>Profile:</h2>
//   //     <div>
//   //       <label>Name:</label>
//   //       <BlurTextInput
//   //         value={profile.name || ""}
//   //         onBlurText={async (text) => {
//   //           const tProfile = startTransaction(profile);
//   //           tProfile.name = text;
//   //           await commitTransaction(tProfile);
//   //         }}
//   //       />
//   //     </div>
//   //   </div>
//   // );
// };

// export default Profile;
