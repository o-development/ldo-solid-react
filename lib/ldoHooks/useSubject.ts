import { LdoBuilder, ShapeType } from "ldo";
import { LdoBase } from "ldo/dist/util";
import {
  ContextUtil,
  JsonldDatasetProxyBuilder,
  SubjectType,
} from "jsonld-dataset-proxy";
import { useLdoContext } from "../LdoContext";
import { useEffect, useMemo } from "react";
import { TrackingProxyContext } from "./helpers/TrackingProxyContext";
import { defaultGraph } from "@rdfjs/data-model";
import { useForceUpdate } from "../util/useForceReload";

export function useSubject<Type extends LdoBase>(
  shapeType: ShapeType<Type>,
  subject: string | SubjectType
): [Type, undefined] | [undefined, Error] {
  const { dataset, updateManager } = useLdoContext();

  const forceUpdate = useForceUpdate();

  // The main linked data object
  const linkedDataObject = useMemo(() => {
    // Rebuild the LdoBuilder from scratch to inject TrackingProxyContext
    const contextUtil = new ContextUtil(shapeType.context);
    const proxyContext = new TrackingProxyContext(
      {
        dataset,
        contextUtil,
        writeGraphs: [defaultGraph()],
        languageOrdering: ["none", "en", "other"],
      },
      updateManager,
      forceUpdate
    );
    const builder = new LdoBuilder(
      new JsonldDatasetProxyBuilder(proxyContext),
      shapeType
    );
    return builder.fromSubject(subject);
  }, [shapeType, subject, dataset, updateManager, forceUpdate]);

  useEffect(() => {
    // Unregister force update listener upon unmount
    return () => updateManager.removeListener(forceUpdate);
  }, [shapeType, subject]);

  return [linkedDataObject, undefined];
}
