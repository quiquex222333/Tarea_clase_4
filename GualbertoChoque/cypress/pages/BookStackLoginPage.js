class BookStackLoginPage {
  elements = {
    email: () =>
      cy.get('input[name="email"], input[type="email"], #email').first(),
    password: () =>
      cy
        .get('input[name="password"], input[type="password"], #password')
        .first(),
    // Fallback por si quieres hacer click en botón visible
    submit: () =>
      cy
        .contains('button, [type="submit"]', /Acceder|Sign in|Log in|Login/i)
        .filter(":visible")
        .first(),
  };

  visitLogin() {
    cy.visit("https://demo.bookstackapp.com/login");
    cy.location("pathname").should("include", "/login");
    // Asegura que los campos están visibles antes de escribir
    this.elements.email().should("be.visible");
    this.elements.password().should("be.visible");
  }

  loginAs({ email, password }) {
    this.elements.email().clear().type(email);
    // Enviamos el formulario con Enter para evitar ambigüedad de botón
    this.elements.password().clear().type(password).type("{enter}");
    // Si prefieres click:
    // this.elements.submit().should('be.visible').click();
  }
}

module.exports = new BookStackLoginPage();
