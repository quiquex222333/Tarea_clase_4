class BookStackLoginPage {
  elements = {
    email: () => cy.get('input[name="email"], #email'),
    password: () => cy.get('input[name="password"], #password'),
    submit: () =>
      cy.get(
        'button[type="submit"], button:contains("Acceder"), button:contains("Sign in")'
      ),
  };

  visitLogin() {
    cy.visit("https://demo.bookstackapp.com/login");
  }

  fillEmail(email) {
    this.elements.email().clear().type(email);
  }

  fillPassword(password) {
    this.elements.password().clear().type(password);
  }

  submit() {
    this.elements.submit().click();
  }

  loginAs({ email, password }) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}

module.exports = new BookStackLoginPage();
