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
};