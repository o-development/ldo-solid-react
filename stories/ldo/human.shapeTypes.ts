import { ShapeType } from "ldo";
import { humanSchema } from "./human.schema";
import { humanContext } from "./human.context";
import { human, country, language } from "./human.typings";

/**
 * =============================================================================
 * LDO ShapeTypes human
 * =============================================================================
 */

/**
 * human ShapeType
 */
export const humanShapeType: ShapeType<human> = {
  schema: humanSchema,
  shape: "https://ldo.js.org/human",
  context: humanContext,
};

/**
 * country ShapeType
 */
export const countryShapeType: ShapeType<country> = {
  schema: humanSchema,
  shape: "https://ldo.js.org/country",
  context: humanContext,
};

/**
 * language ShapeType
 */
export const languageShapeType: ShapeType<language> = {
  schema: humanSchema,
  shape: "https://ldo.js.org/language",
  context: humanContext,
};
