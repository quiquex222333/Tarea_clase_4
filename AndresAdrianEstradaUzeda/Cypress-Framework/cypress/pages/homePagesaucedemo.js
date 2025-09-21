class HomePageSaucedemo {
  validateHome() {
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain.text", "Products");
  }

  getProducts() {
    return cy.get(".inventory_item");
  }

  addFirstProductToCart() {
    cy.get('[id^="add-to-cart"]').first().click();
  }

  getCartBadge() {
    return cy.get(".shopping_cart_badge");
  }
}

module.exports = new HomePageSaucedemo();