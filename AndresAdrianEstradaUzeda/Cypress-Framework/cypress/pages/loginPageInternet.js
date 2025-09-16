class LoginPage {
  visit() {
    cy.visit(Cypress.env('THEINTERNET_URL') + '/login');
  }

  login(username, password) {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get('button[type="submit"]').click();
  }

  getFlashMessage() {
    return cy.get("#flash");
  }
}

module.exports = new LoginPage();
