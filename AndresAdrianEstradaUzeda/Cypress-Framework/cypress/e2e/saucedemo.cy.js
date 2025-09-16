// saucedemo.cy.js
const loginPage = require("../pages/loginPageSaucedemo");
const homePage = require("../pages/homePageSaucedemo");
const users = require("../fixtures/users.json");

describe("SauceDemo - Tests", () => {

  it("Login exitoso con credenciales válidas", () => {
    cy.allure().epic('E-Commerce').tag('saucedemo', 'smoke').feature('Authentication')
      .story('Login Exitoso').severity('critical').description('Verificar login con credenciales válidas');

    loginPage.visit();
    loginPage.login(users.saucedemo.validUser.username, users.saucedemo.validUser.password);
    homePage.validateHome();
  });

  it("Login fallido con credenciales inválidas", () => {
    cy.allure().epic('E-Commerce').tag('saucedemo', 'smoke').feature('Authentication')
      .story('Login Fallido').severity('normal').description('Verificar error con credenciales inválidas');

    loginPage.visit();
    loginPage.login(users.saucedemo.invalidUser.username, users.saucedemo.invalidUser.password);
    loginPage.getErrorMessage().should("contain.text", "Username and password do not match");
  });

  it("Agregar producto al carrito", () => {
    cy.allure().epic('E-Commerce').tag('saucedemo', 'smoke').feature('Shopping Cart')
      .story('Carrito de Compras').severity('normal').description('Verificar agregar producto al carrito');

    loginPage.visit();
    loginPage.login(users.saucedemo.validUser.username, users.saucedemo.validUser.password);
    homePage.validateHome();
    homePage.addFirstProductToCart();
    homePage.getCartBadge().should("contain.text", "1");
  });

});