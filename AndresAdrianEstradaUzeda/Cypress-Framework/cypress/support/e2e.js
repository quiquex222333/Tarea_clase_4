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
// cypress/support/e2e.js

// Importa comandos personalizados y plugin de Allure
import './commands';
import '@shelex/cypress-allure-plugin';

beforeEach(() => {
  cy.allure().tag('regression');
  cy.allure().owner('QA Team');
  cy.allure().severity('normal');
});

afterEach(function () {
  // Nombre seguro para el archivo, evitando caracteres inválidos
  const testTitle = this.currentTest.title.replace(/[:\/]/g, '');
  const specName = Cypress.spec.name;
  
  // Añadimos timestamp para que cada corrida genere un archivo único
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const screenshotFileName = `${testTitle}-${timestamp}.png`;
  const screenshotPath = `cypress/screenshots/${specName}/${screenshotFileName}`;

  // Tomar screenshot al finalizar el test
  cy.screenshot(screenshotFileName, { capture: 'runner' }).then(() => {
    // Leer la imagen y adjuntarla a Allure
    cy.task('readFileIfExists', screenshotPath).then((img) => {
      if (img) {
        cy.allure().attachment('Screenshot', Buffer.from(img, 'base64'), 'image/png');
      }
    });
  });
});
