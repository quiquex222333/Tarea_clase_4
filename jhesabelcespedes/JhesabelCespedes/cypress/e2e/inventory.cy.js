import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";

describe("Inventory Tests", () => {
  beforeEach(() => {
    cy.fixture("users").then((users) => {
      LoginPage.visit();
      LoginPage.login(users.valid.username, users.valid.password);
    });
  });

  it("Verificar lista de productos cargada", () => {
    InventoryPage.isLoaded().should("be.visible");//verificación clara de que la página cargó correctamente.
  });

  it("Cantidad mínima de productos > 0", () => {
    InventoryPage.getProducts().its("length").should("be.greaterThan", 0);//.should("be.greaterThan", 0) confirma que no está vacío.
  });
});
