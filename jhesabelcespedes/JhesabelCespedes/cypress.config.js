const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    pageLoadTimeout: 60000, // prueba con 60s o menos
    defaultCommandTimeout: 10000, //Tiempo máximo que Cypress espera a que cualquier comando encuentre su elemento.
    chromeWebSecurity: false, // evita bloqueos por CORS ,quiere cargar otro dominios y eso hace que falle (eja cargar recursos externos)
    //experimentalModifyObstructiveThirdPartyCode: true, // ignora scripts externos.Esto evita que Cypress quede “esperando” por recursos externos que nunca cargan.
    setupNodeEvents(on, config) {
      // listeners
    },
  },
});
