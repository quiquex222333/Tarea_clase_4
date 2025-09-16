const LoginPage = require('../pages/LoginPage');

describe('Login - SauceDemo', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.fixture('users').as('users');
  });

  it('debe iniciar sesión exitosamente con credenciales válidas', function () {
    LoginPage.loginAs(this.users.valid);
    cy.url().should('include', '/inventory.html');
  });

  it('debe mostrar error con usuario bloqueado', function () {
    LoginPage.loginAs(this.users.locked);
    LoginPage.elements.error()
      .should('be.visible')
      .and('contain.text', 'Sorry, this user has been locked out');
  });

  it('debe mostrar error con credenciales inválidas', function () {
    LoginPage.loginAs(this.users.invalid);
    LoginPage.elements.error()
      .should('be.visible')
      .and('contain.text', 'Username and password do not match');
  });
});
