import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput = 'input#search';  // Selector input búsqueda
  readonly searchButton = 'button#search-icon-legacy';  // Botón buscar

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
  }

  async search(text: string) {
    await this.page.fill(this.searchInput, text);
    await this.page.click(this.searchButton);
  }
}
