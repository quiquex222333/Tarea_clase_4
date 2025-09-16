import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly products: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.products = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async isLoaded(): Promise<boolean> {
    return await this.title.isVisible();
  }

  async getProductsCount(): Promise<number> {
    return await this.products.count();
  }

  async addFirstProductToCart() {
    await this.page.locator('button[data-test^="add-to-cart"]').first().click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async getCartItemsCount(): Promise<number> {
    return await this.page.locator('.cart_item').count();
  }
}
