const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { screenshotPath, waitFor2, waitFor5 } = require('../utils/helpers');

test('add_to_cart_flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  try {
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    expect(await inventory.isLoaded()).toBeTruthy();

    await inventory.addFirstItemToCart();
    await waitFor2();
    expect(await inventory.itemsInCart()).toBe(1);

    await inventory.openCart();
    await waitFor5();
    await expect(page).toHaveURL(/cart/);
  } catch (err) {
    await page.screenshot({ path: screenshotPath('cart_flow_fail') });
    throw err;
  }
});
