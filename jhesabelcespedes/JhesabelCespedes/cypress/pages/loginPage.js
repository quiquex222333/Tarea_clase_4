class LoginPage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginButton: () => cy.get("#login-button"),
    errorMessage: () => cy.get('[data-test="error"]')
  };
  //Abre la URL base definida
  visit() {
    cy.visit("/");
  }

  login(username, password) {
    this.elements.usernameInput().clear().type(username);
    this.elements.passwordInput().clear().type(password);
    this.elements.loginButton().click();
  }

  getErrorMessage() {
    return this.elements.errorMessage();
  }
}

export default new LoginPage();
