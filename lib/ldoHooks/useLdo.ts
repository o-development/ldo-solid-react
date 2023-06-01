import {
  LdoDataset,
  startTransaction,
  transactionChanges,
  write,
  getDataset,
} from "ldo";
import { LdoBase } from "ldo/dist/util";
import { useCallback, useMemo } from "react";
import { useLdoContext } from "../LdoContext";
import { DatasetChanges, TransactionalDataset } from "o-dataset-pack";
import { Quad } from "@rdfjs/types";
import { Resource } from "../resource/Resource";
import { splitChangesByGraph } from "./helpers/splitChangesByGraph";
import { changesToSparqlUpdate } from "./helpers/changesToSparqlUpdate";

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
      return transactionLdo;
    },
    [dataset, fetch]
  );

  /**
   * Commits the transaction to the global dataset, syncing all subscribing
   * components and Solid Pods
   */
  const commitChanges = useCallback(
    async (input: LdoBase) => {
      const changes = transactionChanges(input) as DatasetChanges<Quad>;
      const transactionalDataset: TransactionalDataset = getDataset(
        input
      ) as TransactionalDataset;

      transactionalDataset.commit();
      updateManager.notifyListenersOfChanges(changes);

      const changesByGraph = splitChangesByGraph(changes);

      // Make queries
      await Promise.all(
        Array.from(changesByGraph.entries()).map(
          async ([graph, datasetChanges]) => {
            if (graph.termType === "DefaultGraph") {
              return;
            }
            const sparqlUpdate = await changesToSparqlUpdate(datasetChanges);
            const response = await fetch(graph.value, {
              method: "PATCH",
              body: sparqlUpdate,
              headers: {
                "Content-Type": "application/sparql-update",
              },
            });
            if (response.status !== 200) {
              // Handle Error by rollback
              transactionalDataset.rollback();
              updateManager.notifyListenersOfChanges(changes);
            }
          }
        )
      );
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
