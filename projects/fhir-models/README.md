# Fhir Models

A powerful library providing R4, R4B, and R5 resource models for FHIR. This package simplifies handling FHIR resources with flexible interfaces and type-safe utilities tailored to various FHIR versions.

## Features

- Comprehensive interfaces for R4, R4B, and R5 FHIR resources
- Flexible type generation for FHIR resources
- Version-specific Bundles (`BundleForVersion`)
- Version-specific Resource Types (`ResourceForVersion`)

## Installation

Install the package using NPM:

```bash
  npm install @huseyininanc/fhir-models
```

## Usage/Examples

### Resource Types for R4, R4B, and R5

Effortlessly import resource types from different FHIR versions:

```typescript
import * as R4 from "@huseyininanc/fhir-models";
import * as R4B from "@huseyininanc/fhir-models";
import * as R5 from "@huseyininanc/fhir-models";

var patientR4: R4.Patient;
var patientR4B: R4B.Patient;
var patientR5: R5.Patient;
```

### BundleForVersion

Use `BundleForVersion` to work with Bundles customized for specific FHIR versions and resource types:

```typescript

import { BundleForVersion } from "@huseyininanc/fhir-models";

// Define an R4 Bundle for the Patient resource
type R4BundlePatientType = BundleForVersion<'R4', 'Patient'>;

// Define an R5 Bundle for the Observation resource
type R5BundleObservationType = BundleForVersion<'R5', 'Observation'>;
```

### ResourceForVersion

With ResourceForVersion, you can access the correct resource type for a given FHIR version:

```typescript
import { ResourceForVersion } from "@huseyininanc/fhir-models";

// Define R4 Patient type
type R4PatientType = ResourceForVersion<'R4', 'Patient'>;

// Define R5 Observation type
type R5ObservationType = ResourceForVersion<'R5', 'Observation'>;
```

## Authors

Developed and maintained by [@huseyininnc](https://github.com/huseyininnc)
