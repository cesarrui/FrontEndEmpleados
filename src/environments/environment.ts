// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endPoint1: "http://localhost:7131/api/",
  endPoint2: "http://localhost:7114/api/",
  addempleado: "http://localhost:7131/api/AddEmpleado",
  getEmpleados: "http://localhost:7131/api/GetEmpleados",
  updateEmpleado: "http://localhost:7131/api/UpdateEmpleado",
  getdocumentos: "http://localhost:7131/api/GetDocumentos",
  verificarUsuario: "http://localhost:7131/api/VerificarUsuario",
  getAreas: "http://localhost:7114/api/GetAreas/{idPais}",
  getPaises: "http://localhost:7114/api/GetPaises",
  getSubAreas: "http://localhost:7114/api/GetSubAreas/{idArea}"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
