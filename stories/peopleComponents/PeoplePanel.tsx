import React, { FunctionComponent, useCallback } from "react";
import { useLdo, useResource, useSubject } from "../../lib";
import { ContainerShapeType } from "../ldo/solid.shapeTypes";
import { humanShapeType } from "../ldo/human.shapeTypes";

const PeoplePanel: FunctionComponent = () => {
  const resourceUri = "https://jackson.solidcommunity.net/public/testPeople/";
  const { getResource, createData, commitData } = useLdo();
  const containerResource = useResource(resourceUri, { loadOnMount: true });
  const [container, containerError] = useSubject(
    ContainerShapeType,
    resourceUri
  );

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
  if (containerError) {
    return <p>Container Error</p>;
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", minHeight: "100%" }}>
        <div style={{ borderRight: "1px solid black", padding: 10, flex: 1 }}>
          <h2>List of People</h2>
          <button onClick={addPerson}>Add a person</button>
          <ul>
            {container.contains?.map((contained) => (
              <li key={contained["@id"]}>{contained["@id"]}</li>
            ))}
          </ul>
        </div>

        <div style={{ padding: 10, flex: 2 }}>
          <h2>Person</h2>
        </div>
      </div>
    </div>
  );
};

export default PeoplePanel;
