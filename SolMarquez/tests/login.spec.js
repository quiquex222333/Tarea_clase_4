
const { test } = require('@playwright/test');
const { testConfig } = require('../Data/login_data');
const { expect } = require('@playwright/test');


test('TC_01 Login User with correct user and password', async ({ page }) => {
    await page.goto(testConfig.home);
    await expect(page.getByText('No books found.')).toBeVisible();
})