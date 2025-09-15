const loginPage = require("../pages/loginPageInternet");
const securePage = require("../pages/securePageInternet");
const users = require("../fixtures/users.json");

describe("The Internet - Tests", () => {
  
  beforeEach(() => {
    cy.allure().epic('Security Testing');
    cy.allure().feature('Authentication');
    cy.allure().tag('theinternet', 'security');
  });

  it("Login exitoso con credenciales válidas", () => {
    cy.allure()
      .description('Verificar acceso exitoso a área segura')
      .story('Secure Area Access')
      .severity('critical');
    
    cy.allure().step('Visitar página de login', () => {
      loginPage.visit();
    });
    
    cy.allure().step('Realizar login con credenciales válidas', () => {
      loginPage.login(users.theinternet.validUser.username, users.theinternet.validUser.password);
    });
    
    cy.allure().step('Validar acceso a área segura', () => {
      securePage.validateSecureArea();
      securePage.getFlashMessage().should("contain.text", "You logged into a secure area!");
    });
  });

  it("Login fallido con credenciales inválidas", () => {
    cy.allure()
      .description('Verificar mensaje de error con credenciales inválidas')
      .story('Invalid Login')
      .severity('normal');
    
    cy.allure().step('Visitar página de login', () => {
      loginPage.visit();
    });
    
    cy.allure().step('Intentar login con credenciales inválidas', () => {
      loginPage.login(users.theinternet.invalidUser.username, users.theinternet.invalidUser.password);
    });
    
    cy.allure().step('Validar mensaje de error', () => {
      loginPage.getFlashMessage().should("contain.text", "Your username is invalid!");
    });
  });

  it("Logout exitoso", () => {
    cy.allure()
      .description('Verificar que el usuario puede cerrar sesión correctamente')
      .story('Logout Process')
      .severity('normal');
    
    cy.allure().step('Login exitoso', () => {
      loginPage.visit();
      loginPage.login(users.theinternet.validUser.username, users.theinternet.validUser.password);
      securePage.validateSecureArea();
    });
    
    cy.allure().step('Realizar logout', () => {
      securePage.logout();
    });
    
    cy.allure().step('Validar redirección a login', () => {
      cy.url().should("include", "/login");
    });
  });
});