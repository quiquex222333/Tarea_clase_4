const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

describe('Inventario - SauceDemo', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.valid.username, users.valid.password);
    });
  });

  it('verifica que el inventario cargue y permita ordenar por precio ascendente', () => {
    InventoryPage.assertOnPage();
    InventoryPage.elements.inventoryItems().should('have.length.greaterThan', 0);
    InventoryPage.sortBy('Price (low to high)');
    // Verificación simple: el primer ítem debe contener un precio en orden esperado
    cy.get('.inventory_item_price').then(($prices) => {
      const nums = [...$prices].map((el) => parseFloat(el.innerText.replace('$', '')));
      const sorted = [...nums].sort((a, b) => a - b);
      expect(nums).to.deep.equal(sorted);
    });
  });

  it('agrega 2 productos al carrito y muestra el badge correcto', () => {
    InventoryPage.addFirstNItems(2);
    InventoryPage.elements.cartBadge().should('contain.text', '2');
    InventoryPage.goToCart();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 2);
  });
});
