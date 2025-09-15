const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    video: false,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false, // Evita bloqueos por iframes o contenido mixto

    env: {
      SAUCEDEMO_URL: 'https://www.saucedemo.com',
      THEINTERNET_URL: 'https://the-internet.herokuapp.com',
      allure: true,
      allureReuseAfterSpec: true
    },

    setupNodeEvents(on, config) {
      // Configuración de Allure
      allureWriter(on, config);

      // Task para leer screenshots en Node y devolver en base64
      on('task', {
        readFileIfExists(filePath) {
          if (fs.existsSync(filePath)) {
            return fs.readFileSync(filePath, { encoding: 'base64' });
          }
          return null;
        }
      });

      return config;
    },
  },
});
