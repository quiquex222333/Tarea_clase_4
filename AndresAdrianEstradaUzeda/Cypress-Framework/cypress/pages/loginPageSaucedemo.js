class loginPageSaucedemo {
  visit() {
    cy.visit(Cypress.env('SAUCEDEMO_URL'));
  }

  login(username, password) {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }
}

module.exports = new loginPageSaucedemo();