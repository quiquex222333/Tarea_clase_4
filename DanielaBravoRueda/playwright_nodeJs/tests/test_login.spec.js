import { test, expect } from '@playwright/test';
import fs from 'fs';

// Importa tus Page Objects
import { LoginPage } from '../pages/login.js';
import { InventoryPage } from '../pages/inventory.js';
import { BASE_URL } from '../utils/config.js';
import { screenshotPath } from '../utils/helper.js';


// Leer el archivo de usuarios
const USERS = JSON.parse(fs.readFileSync('data/users.json', 'utf-8'));

// Equivalente a parametrize en Pytest)
const testCases = [
  { userKey: 'valid', expectedSuccess: true },
  { userKey: 'invalid', expectedSuccess: false },
];

test.describe('Valida el login de usuarios', () => {
  testCases.forEach(({ userKey, expectedSuccess }) => {
    test(`Usuario Logueado "${userKey}" → expected success: ${expectedSuccess}`, async ({ page }) => {
      const login = new LoginPage(page);
      const inventory = new InventoryPage(page);

      try {
        // Ir a la página de login
        await login.goto(BASE_URL);

        // Obtener credenciales
        const creds = USERS[userKey];

        // Hacer login
        await login.login(creds.username, creds.password);

        if (expectedSuccess) {
          await expect(await inventory.is_loaded()).toBeTruthy();
        } else {
          await expect(await inventory.is_loaded()).toBeFalsy();
          await expect(await login.getErrorMsg()).not.toBe('');
        }
      } catch (error) {
        await page.screenshot({ path: screenshotPath(`login_${userKey}_fail.png`) });
        throw error;
      }
    });
  });
});
