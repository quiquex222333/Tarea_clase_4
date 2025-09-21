// the_internet.cy.js
const loginPage = require("../pages/loginPageInternet");
const securePage = require("../pages/securePageInternet");
const users = require("../fixtures/users.json");

describe("The Internet - Tests", () => {
  
  beforeEach(() => {
    cy.allure().epic('Testing').feature('Authentication').tag('theinternet', 'security');
  });

  it("Login exitoso con credenciales válidas", () => {
    cy.allure().description('Verificar acceso exitoso a área segura').story('Secure Area Access').severity('critical');
    
    loginPage.visit();
    loginPage.login(users.theinternet.validUser.username, users.theinternet.validUser.password);
    securePage.validateSecureArea();
    securePage.getFlashMessage().should("contain.text", "You logged into a secure area!");
  });

  it("Login fallido con credenciales inválidas", () => {
    cy.allure().description('Verificar mensaje de error con credenciales inválidas').story('Invalid Login').severity('normal');
    
    loginPage.visit();
    loginPage.login(users.theinternet.invalidUser.username, users.theinternet.invalidUser.password);
    loginPage.getFlashMessage().should("contain.text", "Your username is invalid!");
  });

  it("Logout exitoso", () => {
    cy.allure().description('Verificar que el usuario puede cerrar sesión correctamente').story('Logout Process').severity('normal');
    
    loginPage.visit();
    loginPage.login(users.theinternet.validUser.username, users.theinternet.validUser.password);
    securePage.validateSecureArea();
    securePage.logout();
    cy.url().should("include", "/login");
  });
});