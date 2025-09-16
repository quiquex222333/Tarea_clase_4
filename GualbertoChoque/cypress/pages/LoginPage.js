class LoginPage {
  elements = {
    username: () => cy.get('#user-name'),
    password: () => cy.get('#password'),
    submit: () => cy.get('#login-button'),
    error: () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit('/');
  }

  fillUsername(user) {
    this.elements.username().clear().type(user);
  }

  fillPassword(pass) {
    this.elements.password().clear().type(pass);
  }

  submit() {
    this.elements.submit().click();
  }

  loginAs({ username, password }) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

module.exports = new LoginPage();
