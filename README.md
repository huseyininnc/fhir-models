# Fhir Models

Fhir models library with R4, R4B and R5 Resource models

## Features

- R4 Resource types
- R4B Resource types
- R5 Resource types
- Type Generator
- BundleForVersion
- ResourceForVersion

## Usage/Examples

### Rresource types

```typescript
import * as R4 from "./../models/r4/types";
import * as R4B from "./../models/r4b/types";
import * as R5 from "./../models/r5/types";

var patientR4: R4.Patient;
var patientR4B: R4B.Patient;
var patientR5: R5.Patient;
```

### BundleForVersion

```typescript
import { BundleForVersion } from "./fhir-type-generator";

// Get R4 Bundle<Patient> type
type R4BundlePatientType = BundleForVersion<'R4', 'Patient'>;
 
// Get R5 Bundle<Observation> type
type R5BundleObservationType = BundleForVersion<'R5', 'Observation'>;
```

### ResourceForVersion

```typescript
import { ResourceForVersion } from "./fhir-type-generator";

// Get R4 Patient type
type R4PatientType = ResourceForVersion<'R4', 'Patient'>;
 
// Get R5 Observation type
type R5ObservationType = ResourceForVersion<'R5', 'Observation'>;
```

## Code scaffolding

Run `ng generate component component-name --project fhir-models` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project fhir-models`.
> Note: Don't forget to add `--project fhir-models` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build fhir-models` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build fhir-models`, go to the dist folder `cd dist/fhir-models` and run `npm publish`.

## Running unit tests

Run `ng test fhir-models` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Authors

- [@huseyininnc](https://github.com/huseyininnc)
