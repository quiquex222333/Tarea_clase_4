// Ejemplo de un custom command para login directo si tu app expone endpoints.
// Aquí usamos UI flow por ser sitio demo.
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('#user-name').clear().type(username);
  cy.get('#password').clear().type(password);
  cy.get('#login-button').click();
});
