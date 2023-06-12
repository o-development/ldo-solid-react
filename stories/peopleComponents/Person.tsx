import React, { FunctionComponent, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Resource, useLdo, useResource, useSubject } from "../../lib";
import { humanShapeType } from "../ldo/human.shapeTypes";
import { human } from "../ldo/human.typings";
import { getDataset } from "ldo";
import { namedNode } from "@rdfjs/data-model";

export interface PersonFormProps {
  person: human;
  resource: Resource;
}

const PersonForm: FunctionComponent<PersonFormProps> = ({
  person,
  resource,
}) => {
  const { createData, commitData } = useLdo();
  console.log(getDataset(person).match(namedNode(resource.uri)).toString());
  console.log(person.placeOfBirth);
  const { handleSubmit, register } = useForm<human>({
    // BAD
    values: JSON.parse(JSON.stringify(person)),
  });
  const onSubmit = useCallback(
    async (input: human) => {
      const cPerson = createData(
        humanShapeType,
        input["@id"] as string,
        resource
      );
      cPerson.placeOfBirth = input.placeOfBirth;
      cPerson.dateOfBirth = input.dateOfBirth;
      await commitData(cPerson);
    },
    [resource]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>Place of Birth</label>
      <input {...register("placeOfBirth")} />
      <label>Date of Birth</label>
      <input {...register("dateOfBirth")} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export interface PersonProps {
  uri: string;
}

const Person: FunctionComponent<PersonProps> = ({ uri }) => {
  const personResource = useResource(uri, { loadOnMount: true });
  const [person, personError] = useSubject(humanShapeType, uri);

  return (
    <div>
      <h2>Person</h2>
      <p>{uri}</p>
      {(() => {
        if (personResource.isLoading) {
          return <p>Loading...</p>;
        } else if (personError) {
          return <p>Error with Person</p>;
        } else {
          return <PersonForm person={person} resource={personResource} />;
        }
      })()}
    </div>
  );
};

export default Person;
