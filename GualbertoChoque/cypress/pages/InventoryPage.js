class InventoryPage {
  elements = {
    title: () => cy.get('.app_logo'),
    inventoryItems: () => cy.get('.inventory_item'),
    sortSelect: () => cy.get('[data-test="product-sort-container"]'),
    addToCartButtons: () => cy.get('button[data-test^="add-to-cart-"]'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    cartLink: () => cy.get('.shopping_cart_link'),
  };

  assertOnPage() {
    cy.url().should('include', '/inventory.html');
    this.elements.title().should('contain.text', 'Swag Labs');
  }

  sortBy(optionText) {
    this.elements.sortSelect().select(optionText);
  }

  addFirstNItems(n = 1) {
    this.elements.addToCartButtons().its('length').should('be.gte', n);
    this.elements.addToCartButtons().then(($btns) => {
      for (let i = 0; i < n; i++) {
        cy.wrap($btns[i]).click();
      }
    });
  }

  goToCart() {
    this.elements.cartLink().click();
  }
}

module.exports = new InventoryPage();
