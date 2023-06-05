import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * humanContext: JSONLD Context for human
 * =============================================================================
 */
export const humanContext: ContextDefinition = {
  instanceOf: {
    "@id": "http://www.wikidata.org/prop/direct/instanceOf",
    "@container": "@set",
  },
  Human: "http://www.wikidata.org/entity/Human",
  sexOrGender: {
    "@id": "http://www.wikidata.org/prop/direct/sexOrGender",
  },
  male: "http://www.wikidata.org/entity/male",
  female: "http://www.wikidata.org/entity/female",
  intersex: "http://www.wikidata.org/entity/intersex",
  transgenderFemale: "http://www.wikidata.org/entity/transgenderFemale",
  transgenerMale: "http://www.wikidata.org/entity/transgenerMale",
  nonBinary: "http://www.wikidata.org/entity/nonBinary",
  placeOfBirth: {
    "@id": "http://www.wikidata.org/prop/direct/placeOfBirth",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  dateOfBirth: {
    "@id": "http://www.wikidata.org/prop/direct/dateOfBirth",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  givenName: {
    "@id": "http://www.wikidata.org/prop/direct/givenName",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  familyName: {
    "@id": "http://www.wikidata.org/prop/direct/familyName",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  occupation: {
    "@id": "http://www.wikidata.org/prop/direct/occupation",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  countryOfCitizenship: {
    "@id": "http://www.wikidata.org/prop/direct/countryOfCitizenship",
    "@type": "@id",
    "@container": "@set",
  },
  country: "http://www.wikidata.org/entity/country",
  historicalCountry: "http://www.wikidata.org/entity/historicalCountry",
  sovereignState: "http://www.wikidata.org/entity/sovereignState",
  father: {
    "@id": "http://www.wikidata.org/prop/direct/father",
    "@type": "@id",
    "@container": "@set",
  },
  mother: {
    "@id": "http://www.wikidata.org/prop/direct/mother",
    "@type": "@id",
    "@container": "@set",
  },
  sibling: {
    "@id": "http://www.wikidata.org/prop/direct/sibling",
    "@type": "@id",
    "@container": "@set",
  },
  spouse: {
    "@id": "http://www.wikidata.org/prop/direct/spouse",
    "@type": "@id",
    "@container": "@set",
  },
  child: {
    "@id": "http://www.wikidata.org/prop/direct/child",
    "@type": "@id",
    "@container": "@set",
  },
  relative: {
    "@id": "http://www.wikidata.org/prop/direct/relative",
    "@type": "@id",
    "@container": "@set",
  },
  nativeLanguage: {
    "@id": "http://www.wikidata.org/prop/direct/nativeLanguage",
    "@type": "@id",
    "@container": "@set",
  },
  language: "http://www.wikidata.org/entity/language",
  modernLanguage: "http://www.wikidata.org/entity/modernLanguage",
  languagesSpoken: {
    "@id": "http://www.wikidata.org/prop/direct/languagesSpoken",
    "@type": "@id",
    "@container": "@set",
  },
  writingLanguage: {
    "@id": "http://www.wikidata.org/prop/direct/writingLanguage",
    "@type": "@id",
    "@container": "@set",
  },
  label: {
    "@id": "http://www.w3.org/2000/01/rdf-schema#label",
    "@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
    "@container": "@set",
  },
};
