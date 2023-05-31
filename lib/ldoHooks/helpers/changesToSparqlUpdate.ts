import { DatasetChanges } from "o-dataset-pack";
import { datasetToString } from "ldo/dist/datasetConverters";
import { Quad } from "@rdfjs/types";

// TODO: This file is a clone from the one in the base ldo library. This resused
// code should be put into a helper library once everything becomes a monorepo.
export async function changesToSparqlUpdate(changes: DatasetChanges<Quad>) {
  let output = "";
  if (changes.removed) {
    output += `DELETE DATA { ${await datasetToString(changes.removed, {
      format: "N-Triples",
    })} }`;
  }
  if (changes.added && changes.removed) {
    output += "; ";
  }
  if (changes.added) {
    output += `INSERT DATA { ${await datasetToString(changes.added, {
      format: "N-Triples",
    })} }`;
  }
  return output.replaceAll("\n", " ");
}
