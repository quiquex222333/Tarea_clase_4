class LoginPage {
  visit() {
    cy.visit('https://demo.sylius.com/admin/login');
  }

  closeInfoBoxIfVisible() {
    cy.get('body').then(($body) => {
      if ($body.find('#info-box.show').length > 0) {
        cy.get('#info-toggle').click();
        cy.get('#info-box').should('not.have.class', 'show');
      }
    });
  }

  fillEmail(email) {
    this.closeInfoBoxIfVisible();
    cy.get('input[name="_username"]').clear().type(email);
  }

  fillPassword(password) {
    this.closeInfoBoxIfVisible();
    cy.get('input[name="_password"]').clear().type(password);
  }

  submit() {
    this.closeInfoBoxIfVisible();
    cy.get('button[type="submit"]').click();
  }

  checkDashboard() {
    cy.url().should('eq', 'https://demo.sylius.com/admin/');
    cy.get('h1.page-title')
    .should('be.visible')
    .and('contain.text', 'Dashboard');
  }

  checkError(expectedMessage) {
    cy.get('.alert.alert-danger')
      .should('be.visible')
      .and('contain.text', expectedMessage);
    cy.url().should('include', '/admin/login');
  }
}

export default LoginPage;