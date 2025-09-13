// Importamos Playwright Test y expect
const { test, expect } = require('@playwright/test');

// Importamos los Page Objects
const { LoginPage } = require('../pages/login_page');
const { InventoryPage } = require('../pages/inventory_page');

// Importamos configuración y helpers
const { BASE_URL } = require('../utils/config');
const { screenshotPath, waitFor } = require('../utils/helpers');

// Importamos los datos de usuarios desde JSON
const USERS = require('../data/users.json');

// Definimos los casos de prueba
const testCases = [
  { userKey: 'valid', expectedSuccess: true },
  { userKey: 'locked', expectedSuccess: false },
  { userKey: 'invalid', expectedSuccess: false },
  { userKey: 'especial', expectedSuccess: false }
];

// Iteramos sobre cada caso
for (const { userKey, expectedSuccess } of testCases) {
  test(`Login con usuario "${userKey}" → éxito esperado: ${expectedSuccess}`, async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    try {
      // Ir a la página de login
      await login.goto(BASE_URL);
      await waitFor(page, 3);

      // Obtener credenciales del JSON
      const creds = USERS[userKey];

      // Hacer login
      await login.login(creds.username, creds.password);
      await waitFor(page, 3);
      if (expectedSuccess) {
        // Si se espera éxito, verificar que el inventario este cargado
        expect(await inventory.isLoaded()).toBeTruthy();
      } else {
        // Si se espera fallo, verificar que no cargue inventario y haya mensaje de error
        expect(await inventory.isLoaded()).toBeFalsy();
        expect(await login.getErrorMessage()).not.toBe('');
      }
    } catch (error) {
      // Si algo falla, tomar captura
      await page.screenshot({ path: screenshotPath(`login_${userKey}_fail`) });
      throw error; // Re-lanzar para que el test falle
    }
  });
}