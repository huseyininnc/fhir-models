import * as R4 from "./../models/r4/types";
import * as R4B from "./../models/r4b/types";
import * as R5 from "./../models/r5/types";
/**
 * FHIR version types.
 */
export type FhirVersion = 'R4' | 'R4B' | 'R5';
/**
 * Resource binding for generic use.
 */
export type FhirResource = R4.FhirResource | R4B.FhirResource | R5.FhirResource;
/**
 * A container for a collection of resources.
 */
export type Bundle = R4.Bundle<R4.FhirResource> | R4B.Bundle<R4B.FhirResource> | R5.Bundle<R5.FhirResource>;
/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 * Tracking patient is the center of the healthcare process.
 */
export type Patient = R4.Patient | R4B.Patient | R5.Patient;
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 * Observations are a key aspect of healthcare.  This resource is used to capture those that do not require more sophisticated mechanisms.
 */
export type Observation = R4.Observation | R4B.Observation | R5.Observation;
/**
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
export type Medication = R4.Medication | R4B.Medication | R5.Medication;
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 * To support reporting for any diagnostic report into a clinical data repository.
 */
export type DiagnosticReport = R4.DiagnosticReport | R4B.DiagnosticReport | R5.DiagnosticReport;
