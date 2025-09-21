import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.js';  
import { InventoryPage } from '../pages/inventory.js';
import { BASE_URL } from '../utils/config.js';
import { screenshotPath, sleep } from '../utils/helper.js';

test.describe('Validar Flujo de añadir item a carrito', () => {

  test('Agregar primer item al carrito y abrir carrito', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    try {
      await login.goto(BASE_URL); 
      await login.login('standard_user', 'secret_sauce');
      await expect(await inventory.is_loaded()).toBeTruthy();

      // Agregar primer item al carrito
      await inventory.add_first_item_to_cart();
      await expect(await inventory.items_in_carts()).toBe(1);

      // Verificar que el inventario se cargó
      await expect(await inventory.is_loaded()).toBeTruthy();

      // Abrir carrito
      await inventory.open_cart();

    } catch (error) {
      await page.screenshot({ path: screenshotPath('cart_flow_fail') });
      throw error;
    }
  });

});
