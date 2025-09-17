import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";

describe("Login Tests", () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.get("#user-name").should("be.visible");
  });

  it("Login válido", () => {
    cy.fixture("users").then((users) => {
      LoginPage.login(users.valid.username, users.valid.password);
      InventoryPage.isLoaded().should("be.visible");
    });
  });

  it("Login inválido", () => {
    cy.fixture("users").then((users) => {
      LoginPage.login(users.invalid.username, users.invalid.password);
      LoginPage.getErrorMessage().should("contain.text", "Epic sadface");
    });
  });

  it("Usuario bloqueado", () => {
    cy.fixture("users").then((users) => {
      LoginPage.login(users.locked.username, users.locked.password);
      LoginPage.getErrorMessage().should("contain.text", "locked out");
    });
  });
});
