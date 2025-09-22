class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page 
   */
  constructor(page) {
    this.page = page;
    this.inventoryContainer = page.locator('.inventory_list');
    this.cartButton = page.locator('.shopping_cart_link');
    this.itemAddButton = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async isLoaded() {
    await this.inventoryContainer.waitFor({ state: 'visible' });
  }

  async addItemToCart() {
    await this.itemAddButton.click();
  }

  async goToCart() {
    await this.cartButton.click();
  }
}

module.exports = { InventoryPage };