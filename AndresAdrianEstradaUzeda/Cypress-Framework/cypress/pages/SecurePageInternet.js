class SecurePageInternet {
  validateSecureArea() {
    cy.url().should("include", "/secure");
    cy.get("h2").should("contain.text", "Secure Area");
  }

  getFlashMessage() {
    return cy.get("#flash");
  }

  logout() {
    cy.get('a[href="/logout"]').click();
  }
}

module.exports = new SecurePageInternet();