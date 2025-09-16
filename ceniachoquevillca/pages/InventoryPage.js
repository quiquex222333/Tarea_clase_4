const { expect } = require('@playwright/test');

class InventoryPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.inventoryList = '.inventory_list';
    this.addToCartBtn = "button[data-test='add-to-cart-sauce-labs-backpack']";
    this.cartIcon = '.shopping_cart_link';
    this.cartBadge = '.shopping_cart_badge';
  }

  async isLoaded() {
    return await this.page.locator(this.inventoryList).isVisible();
  }

  async addFirstItemToCart() {
    // igual que tu .first.click()
    await this.page.locator(this.addToCartBtn).first().click();
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }

  async itemsInCart() {
    const badge = this.page.locator(this.cartBadge);
    if (await badge.isVisible()) {
      const txt = await badge.textContent();
      return parseInt(txt || '0', 10);
    }
    return 0;
  }
}

module.exports = { InventoryPage };
