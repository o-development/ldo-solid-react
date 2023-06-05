import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for human
 * =============================================================================
 */

/**
 * human Type
 */
export interface human {
  "@id"?: string;
  "@context"?: ContextDefinition;
  instanceOf: {
    "@id": "Human";
  };
  sexOrGender?:
    | {
        "@id": "male";
      }
    | {
        "@id": "female";
      }
    | {
        "@id": "intersex";
      }
    | {
        "@id": "transgenderFemale";
      }
    | {
        "@id": "transgenerMale";
      }
    | {
        "@id": "nonBinary";
      };
  placeOfBirth?: string;
  dateOfBirth?: string;
  givenName?: string[];
  familyName?: string[];
  occupation?: string[];
  countryOfCitizenship?: country[];
  father?: human[];
  mother?: human[];
  sibling?: human[];
  spouse?: human[];
  child?: human[];
  relative?: human[];
  nativeLanguage?: language[];
  languagesSpoken?: language[];
  writingLanguage?: language[];
  label: string[];
}

/**
 * country Type
 */
export interface country {
  "@id"?: string;
  "@context"?: ContextDefinition;
  instanceOf: (
    | {
        "@id": "country";
      }
    | {
        "@id": "historicalCountry";
      }
    | {
        "@id": "sovereignState";
      }
  )[];
}

/**
 * language Type
 */
export interface language {
  "@id"?: string;
  "@context"?: ContextDefinition;
  instanceOf: (
    | {
        "@id": "language";
      }
    | {
        "@id": "modernLanguage";
      }
  )[];
}
