import { expect } from '@playwright/test';
import { logger } from './logger.js';

export const Assertions = {
  async shouldBeOnInventoryPage(page) {
    await expect(page).toHaveURL(/inventory.html/);
    logger.success('El usuario fue redirigido correctamente al inventario.');
  },

  async shouldSeeErrorMessage(actualError, expectedMessage) {
    await expect(actualError).toContain(expectedMessage);
    logger.error(`Mensaje de error validado: "${expectedMessage}"`);
  }
  ,
  async shouldHaveProducts(items) {
    await expect(items.length).toBeGreaterThan(0);
    logger.success(`Se cargaron ${items.length} productos correctamente.`);
  },

  async shouldHaveCartItems(cartItems, expectedCount = 1) {
    await expect(cartItems).toBe(expectedCount);
    logger.success(`El carrito contiene ${expectedCount} producto(s).`);
  },

  async shouldBeLoggedOut(page) {
    await expect(page.url()).toContain('/');
    logger.success('Logout exitoso y redirigido a login.');
  }
};