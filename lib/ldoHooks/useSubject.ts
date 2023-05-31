import { ShapeType } from "ldo";
import { LdoBase } from "ldo/dist/util";
import { SubjectType } from "jsonld-dataset-proxy";
import { useLdoContext } from "../LdoContext";
import { useEffect, useMemo } from "react";

export function useSubject<Type extends LdoBase>(
  shapeType: ShapeType<Type>,
  subject: string | SubjectType
): [Type, undefined] | [undefined, Error] {
  const { dataset } = useLdoContext();
  const linkedDataObject = useMemo(
    () => dataset.usingType(shapeType).fromSubject(subject),
    [shapeType, subject]
  );
  useEffect(() => {
    // Force update when data has been updated
  }, [shapeType, subject]);

  return [linkedDataObject, undefined];
}
