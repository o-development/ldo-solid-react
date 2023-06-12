import React, { FunctionComponent, useCallback, useState } from "react";
import { useLdo, useResource } from "../../lib";
import { humanShapeType } from "../ldo/human.shapeTypes";
import Person from "./Person";

const PeoplePanel: FunctionComponent = () => {
  const resourceUri = "https://jackson.solidweb.org/public/testPeople/";
  const { getResource, createData, commitData } = useLdo();
  const containerResource = useResource(resourceUri, { loadOnMount: true });
  const [curPersonId, setCurPersonId] = useState<string | undefined>();

  const addPerson = useCallback(async () => {
    const personName = prompt("What is the name for the file?");
    if (personName) {
      const newResource = getResource(`${resourceUri}${personName}.ttl`);
      const cPerson = createData(humanShapeType, newResource.uri, newResource);
      cPerson.givenName = [personName];
      await commitData(cPerson);
    }
  }, []);

  if (containerResource.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", minHeight: "100%" }}>
        <div style={{ borderRight: "1px solid black", padding: 10, flex: 1 }}>
          <h2>List of People</h2>
          <button onClick={addPerson}>Add a person</button>
          <ul>
            {containerResource.contains?.map((contained) => (
              <li
                key={contained["@id"]}
                onClick={() => setCurPersonId(contained["@id"])}
              >
                {contained["@id"]}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ padding: 10, flex: 2 }}>
          {curPersonId && <Person uri={curPersonId} />}
        </div>
      </div>
    </div>
  );
};

export default PeoplePanel;
