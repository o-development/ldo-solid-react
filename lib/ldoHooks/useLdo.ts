import {
  LdoDataset,
  startTransaction,
  toSparqlUpdate,
  transactionChanges,
  write,
} from "ldo";
import { LdoBase } from "ldo/dist/util";
import { useCallback, useMemo } from "react";
import { useLdoContext } from "../LdoContext";
import { DatasetChanges } from "o-dataset-pack";
import { Quad } from "@rdfjs/types";
import { Resource } from "../resource/Resource";

export interface UseLdoReturn {
  changeData<Type extends LdoBase>(input: Type, resource: Resource): Type;
  commitChanges(input: LdoBase): Promise<void>;
  dataset: LdoDataset;
}

export function useLdo(): UseLdoReturn {
  const { dataset, fetch, updateManager } = useLdoContext();

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
      return input;
    },
    [dataset, fetch]
  );

  /**
   * Commits the transaction to the global dataset, syncing all subscribing
   * components and Solid Pods
   */
  const commitChanges = useCallback(
    async (input: LdoBase) => {
      updateManager.notifyListenersOfChanges(
        transactionChanges(input) as DatasetChanges<Quad>
      );

      // Run the Sparql Query
      // TODO: Split SPARQL query between documents
      const sparql = toSparqlUpdate(input);
      const response = await fetch();

      // Rollback?
    },
    [dataset, fetch]
  );

  // Returns the values
  return useMemo(
    () => ({
      dataset,
      changeData,
      commitChanges,
    }),
    [dataset, changeData, commitChanges]
  );
}
