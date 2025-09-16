import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { BASE_URL } from '../utils/config';
import { screenshotPath, waitFor2, waitFor5 } from '../utils/helpers';

test('Flujo de agregar al carrito', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  try {
    await login.goto(BASE_URL);
    await login.login('standard_user', 'secret_sauce');
    expect(await inventory.isLoaded()).toBeTruthy();

    await inventory.addFirstItemToCart();
    await waitFor2();
    expect(await inventory.itemsInCart()).toBe(1);

    await inventory.openCart();
    await waitFor5();
    expect(page.url()).toContain('cart');
  } catch (e) {
    await page.screenshot({ path: screenshotPath('cart_flow_fail') });
    throw e;
  }
});
