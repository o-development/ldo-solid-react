import { Schema } from "shexj";

/**
 * =============================================================================
 * humanSchema: ShexJ Schema for human
 * =============================================================================
 */
export const humanSchema: Schema = {
  type: "Schema",
  start: "https://ldo.js.org/human",
  shapes: [
    {
      id: "https://ldo.js.org/human",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/instanceOf",
              valueExpr: {
                type: "NodeConstraint",
                values: ["http://www.wikidata.org/entity/Human"],
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/sexOrGender",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "http://www.wikidata.org/entity/male",
                  "http://www.wikidata.org/entity/female",
                  "http://www.wikidata.org/entity/intersex",
                  "http://www.wikidata.org/entity/transgenderFemale",
                  "http://www.wikidata.org/entity/transgenerMale",
                  "http://www.wikidata.org/entity/nonBinary",
                ],
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/placeOfBirth",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/dateOfBirth",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/givenName",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/familyName",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/occupation",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate:
                "http://www.wikidata.org/prop/direct/countryOfCitizenship",
              valueExpr: "https://ldo.js.org/country",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/father",
              valueExpr: "https://ldo.js.org/human",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/mother",
              valueExpr: "https://ldo.js.org/human",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/sibling",
              valueExpr: "https://ldo.js.org/human",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/spouse",
              valueExpr: "https://ldo.js.org/human",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/child",
              valueExpr: "https://ldo.js.org/human",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/relative",
              valueExpr: "https://ldo.js.org/human",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/nativeLanguage",
              valueExpr: "https://ldo.js.org/language",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/languagesSpoken",
              valueExpr: "https://ldo.js.org/language",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.wikidata.org/prop/direct/writingLanguage",
              valueExpr: "https://ldo.js.org/language",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2000/01/rdf-schema#label",
              valueExpr: {
                type: "NodeConstraint",
                datatype:
                  "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
              },
              min: 1,
              max: -1,
            },
          ],
        },
        extra: ["http://www.wikidata.org/prop/direct/instanceOf"],
      },
    },
    {
      id: "https://ldo.js.org/country",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://www.wikidata.org/prop/direct/instanceOf",
          valueExpr: {
            type: "NodeConstraint",
            values: [
              "http://www.wikidata.org/entity/country",
              "http://www.wikidata.org/entity/historicalCountry",
              "http://www.wikidata.org/entity/sovereignState",
            ],
          },
          min: 1,
          max: -1,
        },
        extra: ["http://www.wikidata.org/prop/direct/instanceOf"],
      },
    },
    {
      id: "https://ldo.js.org/language",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://www.wikidata.org/prop/direct/instanceOf",
          valueExpr: {
            type: "NodeConstraint",
            values: [
              "http://www.wikidata.org/entity/language",
              "http://www.wikidata.org/entity/modernLanguage",
            ],
          },
          min: 1,
          max: -1,
        },
        extra: ["http://www.wikidata.org/prop/direct/instanceOf"],
      },
    },
  ],
};
