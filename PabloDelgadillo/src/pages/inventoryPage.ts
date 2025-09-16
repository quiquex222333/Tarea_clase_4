import { Page } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private inventoryList = '.inventory_list';
  private addToCartBtn = "button[data-test='add-to-cart-sauce-labs-backpack']";
  private cartIcon = '.shopping_cart_link';
  private cartBadge = '.shopping_cart_badge';

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded(): Promise<boolean> {
    return await this.page.locator(this.inventoryList).isVisible();
  }

  async addFirstItemToCart() {
    await this.page.locator(this.addToCartBtn).first().click();
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }

  async itemsInCart(): Promise<number> {
    const badge = this.page.locator(this.cartBadge);
    if (await badge.isVisible()) {
      const text = await badge.textContent();
      return text ? parseInt(text) : 0;
    }
    return 0;
  }
}
