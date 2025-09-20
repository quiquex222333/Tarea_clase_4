const { test, expect } = require('@playwright/test');
const testData = require('../Data/search_data.json');
const { POManager } = require('../pages/POManager'); 

test.describe('Search Functionality', () => {
    for (const data of testData) {
        test(`should be able to search for the product: ${data.productName}`, async ({ page }) => {
            const poManager = new POManager(page);
            const searchPage = poManager.getSearchPage();

            await searchPage.navigateToUrl(data.url);
            await searchPage.searchProduct(data.productName);
        });
    }
});