const loginPage = require("../pages/loginPageSaucedemo");
const homePage = require("../pages/homePageSaucedemo");
const users = require("../fixtures/users.json");

describe("SauceDemo - Tests", () => {

  beforeEach(() => {
    cy.allure().epic('E-Commerce');
    cy.allure().tag('saucedemo', 'smoke');
  });

  it("Login exitoso con credenciales válidas", () => {
    cy.allure()
      .feature('Authentication')
      .story('Login Exitoso')
      .severity('critical')
      .description('Verificar que un usuario puede iniciar sesión con credenciales válidas');

    loginPage.visit();
    loginPage.login(users.saucedemo.validUser.username, users.saucedemo.validUser.password);
    homePage.validateHome();
  });

  it("Login fallido con credenciales inválidas", () => {
    cy.allure()
      .feature('Authentication')
      .story('Login Fallido')
      .severity('normal')
      .description('Verificar que el sistema muestra error con credenciales inválidas');

    loginPage.visit();
    loginPage.login(users.saucedemo.invalidUser.username, users.saucedemo.invalidUser.password);
    loginPage.getErrorMessage().should("contain.text", "Username and password do not match");
  });

  it("Agregar producto al carrito", () => {
    cy.allure()
      .feature('Shopping Cart')
      .story('Carrito de Compras')
      .severity('normal')
      .description('Verificar que un producto se puede agregar correctamente al carrito');

    // Login
    loginPage.visit();
    loginPage.login(users.saucedemo.validUser.username, users.saucedemo.validUser.password);
    homePage.validateHome();

    // Agregar producto
    homePage.addFirstProductToCart();
    homePage.getCartBadge().should("contain.text", "1");
  });

});
