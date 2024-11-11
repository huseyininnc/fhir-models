/**
* Utility types and interfaces for handling different FHIR versions and their resources.
*/
import * as R4 from "./../models/r4/types";
import * as R4B from "./../models/r4b/types";
import * as R5 from "./../models/r5/types";
import { FhirVersion } from "./fhir.types";
/**
* Helper type to extract resource types from FHIR resource unions
* @template T - The FHIR resource union type
* @returns The extracted resource type string literals
*/
type ExtractResourceTypes<T> = T extends { resourceType: infer R } ? R : never;
// Extract resource types for each FHIR version
type R4ResourceTypes = ExtractResourceTypes<R4.FhirResource>;
type R4BResourceTypes = ExtractResourceTypes<R4B.FhirResource>;
type R5ResourceTypes = ExtractResourceTypes<R5.FhirResource>;
/**
 * Represents the different versions of FHIR resource types.
 * 
 * @typedef {Object} ResourceTypes
 * @property {R4ResourceTypes} R4 - The FHIR R4 resource types.
 * @property {R4BResourceTypes} R4B - The FHIR R4B resource types.
 * @property {R5ResourceTypes} R5 - The FHIR R5 resource types.
 */
type ResourceTypes = {
 'R4': R4ResourceTypes;
 'R4B': R4BResourceTypes;
 'R5': R5ResourceTypes;
};
/**
* Mapping of FHIR versions to their supported resource types
*/
type ResourceTypeMap = {
    [version in FhirVersion]: ResourceTypes[version];
  };
/**
 * A type that maps FHIR resource versions to their corresponding FHIR resource types.
 * 
 * @property R4 - Represents the FHIR resource type for version R4.
 * @property R4B - Represents the FHIR resource type for version R4B.
 * @property R5 - Represents the FHIR resource type for version R5.
 */
export type ResourceVersionTypes = {
 'R4': R4.FhirResource;
 'R4B': R4B.FhirResource;
 'R5': R5.FhirResource;
};
/**
* Mapping of FHIR versions to their resource definitions
*/
type ResourceVersionMap = {
    [version in FhirVersion]: ResourceVersionTypes[version];
  };
/**
* Mapping of FHIR versions to their bundle definitions
*/
export type BundleVersionMap<
TVersion extends keyof ResourceVersionMap,
TResourceName extends ResourceTypeMap[TVersion]
> = {
    'R4': R4.Bundle<ResourceForVersion<TVersion, TResourceName>>;
    'R4B': R4B.Bundle<ResourceForVersion<TVersion, TResourceName>>;
    'R5': R5.Bundle<ResourceForVersion<TVersion, TResourceName>>;
   };
/**
* Gets a specific resource type for a given FHIR version
* @template TVersion - The FHIR version (R4, R4B, or R5)
* @template TResourceName - The name of the resource type (must be valid for the specified version)
* @returns The typed resource definition
* @example
* ```typescript
* // Get R4 Patient type
* type R4PatientType = ResourceForVersion<'R4', 'Patient'>;
* 
* // Get R5 Observation type
* type R5ObservationType = ResourceForVersion<'R5', 'Observation'>;
* ```
*/
export type ResourceForVersion<
 TVersion extends keyof ResourceVersionMap,
 TResourceName extends ResourceTypeMap[TVersion]
> = Extract<ResourceVersionMap[TVersion], { resourceType: TResourceName }>;
/**
* Gets a specific bundle type for a given FHIR version
* @template TVersion - The FHIR version (R4, R4B, or R5)
* @template TResourceName - The name of the resource type (must be valid for the specified version)
* @returns The typed bundle definition
* @example
* ```typescript
* // Get R4 Bundle<Patient> type
* type R4BundlePatientType = BundleForVersion<'R4', 'Patient'>;
* 
* // Get R5 Bundle<Observation> type
* type R5BundleObservationType = BundleForVersion<'R5', 'Observation'>;
* ```
*/
export type BundleForVersion<
 TVersion extends keyof ResourceVersionMap,
 TResourceName extends ResourceTypeMap[TVersion]
> = BundleVersionMap<TVersion, TResourceName>[TVersion];