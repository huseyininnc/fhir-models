Remove-Item .\dist\* -Recurse -Force
ng build fhir-models
Set-Location .\dist\fhir-models\
npm publish --registry http://localhost:4873/