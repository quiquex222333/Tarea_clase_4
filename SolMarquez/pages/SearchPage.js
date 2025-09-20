const { expect } = require('@playwright/test');

export class SearchPage {
    constructor(page) {
        this.page = page;
        this.search = page.getByPlaceholder('¿QUÉ ESTAS BUSCANDO?').first();
        this.searchBtn = page.locator('button[type="submit"].bg-hiperorange').first();
        this.productContainer = page.locator('.grid.grid-cols-2');
    }

    async navigateToUrl(url) {
        await this.page.goto(url);
    }
    async searchProduct(product) {
        await this.search.fill(product);
        await this.searchBtn.click();
        await expect(this.productContainer.getByText(product).first()).toBeVisible();
    }
}