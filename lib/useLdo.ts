import {
  LdoDataset,
  startTransaction,
  transactionChanges,
  write,
  ShapeType,
} from "ldo";
import { LdoBase } from "ldo/dist/util";
import { useCallback, useContext, useMemo } from "react";
import { DatasetChanges } from "o-dataset-pack";
import { Quad } from "@rdfjs/types";
import { Resource } from "./resource/Resource";
import { splitChangesByGraph } from "./util/splitChangesByGraph";
import { SubjectType } from "jsonld-dataset-proxy";
import { DataResource } from "./document/resource/dataResource/DataResource";
import { BinaryResource } from "./document/binaryResource/BinaryResource";
import { ContainerResource } from "./document/containerResource/ContainerResource";
import { AccessRules } from "./document/accessRules/AccessRules";
import { useLdoContext } from "./LdoContext";

export interface UseLdoReturn {
  changeData<Type extends LdoBase>(input: Type, ...resources: Resource[]): Type;
  commitData(input: LdoBase): Promise<void>;
  createData<Type extends LdoBase>(
    shapeType: ShapeType<Type>,
    subject: string | SubjectType,
    ...resources: Resource[]
  ): Type;
  dataset: LdoDataset;
  getResource: (uri: string) => Resource;
  getDataResource: (uri: string) => DataResource;
  getBinaryResource: (uri: string) => BinaryResource;
  getContainerResource: (uri: string) => ContainerResource;
  getAccessRules: (resource: string | Resource) => AccessRules;
}

export function useLdo(): UseLdoReturn {
  const { documentManager, dataset } = useLdoContext();

  /**
   * Begins tracking changes to eventually commit
   */
  const changeData = useCallback(
    <Type extends LdoBase>(input: Type, ...resources: Resource[]): Type => {
      // Clone the input and set a graph
      const [transactionLdo] = write(...resources.map((r) => r.uri)).usingCopy(
        input
      );
      // Start a transaction with the input
      startTransaction(transactionLdo);
      // Return
      return transactionLdo;
    },
    [dataset]
  );

  /**
   * Begins tracking changes to eventually commit for a new subject
   */
  const createData = useCallback(
    <Type extends LdoBase>(
      shapeType: ShapeType<Type>,
      subject: string | SubjectType,
      ...resources: Resource[]
    ): Type => {
      const linkedDataObject = dataset
        .usingType(shapeType)
        .write(...resources.map((r) => r.uri))
        .fromSubject(subject);
      startTransaction(linkedDataObject);
      return linkedDataObject;
    },
    []
  );

  /**
   * Commits the transaction to the global dataset, syncing all subscribing
   * components and Solid Pods
   */
  const commitData = useCallback(
    async (input: LdoBase) => {
      const changes = transactionChanges(input) as DatasetChanges<Quad>;
      const changesByGraph = splitChangesByGraph(changes);

      // Make queries
      await Promise.all(
        Array.from(changesByGraph.entries()).map(
          async ([graph, datasetChanges]) => {
            if (graph.termType === "DefaultGraph") {
              return;
            }
            const resource = documentManager.getDataResource(graph.value);
            await resource.update(datasetChanges);
          }
        )
      );
    },
    [dataset, fetch]
  );

  const getResource = useCallback(
    (uri: string) => {
      return documentManager.getResource(uri);
    },
    [documentManager]
  );

  // Returns the values
  return useMemo(
    () => ({
      dataset,
      changeData,
      createData,
      commitData,
      getResource: (uri) => documentManager.getResource(uri),
      getDataResource: (uri) => documentManager.getDataResource(uri),
      getBinaryResource: (uri) => documentManager.getBinaryResource(uri),
      getContainerResource: (uri) => documentManager.getContainerResource(uri),
      getAccessRules: (resource) => documentManager.getAccessRules(resource);
    }),
    [dataset, changeData, commitData, getResource]
  );
}
