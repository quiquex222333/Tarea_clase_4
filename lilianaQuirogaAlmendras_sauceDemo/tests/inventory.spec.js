const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const users = require('../data/users.json');

test('Ver productos despues de login exitoso', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login(users.valid.username, users.valid.password);
  await inventory.isLoaded();

  await expect(page).toHaveURL(/inventory/);
  await expect(inventory.inventoryContainer).toBeVisible();
});