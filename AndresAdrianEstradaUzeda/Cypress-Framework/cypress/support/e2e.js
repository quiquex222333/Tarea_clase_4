// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/// Importa tus comandos y el plugin de Allure
import './commands';
import '@shelex/cypress-allure-plugin';

// Configuración global de Allure
beforeEach(() => {
  cy.allure().tag('regression'); // Etiqueta global
  cy.allure().owner('QA Team');  // Responsable
  cy.allure().severity('normal'); // Severidad predeterminada
});

// Hook para adjuntar screenshots a Allure después de cada test
Cypress.on('test:after:run', (test, runnable) => {
  const specName = Cypress.spec.name;
  const testName = test.title.replace(/[:\/]/g, '');

  // Construir ruta del screenshot que Cypress genera automáticamente
  const screenshotFileName = test.state === 'failed' 
    ? `${testName} (failed).png` 
    : `${testName}.png`;

  const screenshotPath = `cypress/screenshots/${specName}/${screenshotFileName}`;

  // Llamar al task de Node para leer el archivo en base64 y adjuntarlo a Allure
  cy.task('readFileIfExists', screenshotPath).then((img) => {
    if (img) {
      cy.allure().fileAttachment('Evidencia', img, 'image/png');
    }
  });
});
