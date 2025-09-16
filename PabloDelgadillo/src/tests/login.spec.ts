import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import users from '../../data/users.json';
import { BASE_URL } from '../utils/config';

type UserKey = keyof typeof users;

const loginCases: Array<{ user_key: UserKey; expected_success: boolean }> = [
  { user_key: 'valid', expected_success: true },
  { user_key: 'locked', expected_success: false },
  { user_key: 'invalid', expected_success: false },
  { user_key: 'ejemplo', expected_success: false },
];

test.describe('Login Varios Usuarios', () => {
  for (const { user_key, expected_success } of loginCases) {
  test(`login con usuario '${String(user_key)}' (espera éxito: ${expected_success})`, async ({ page }) => {
      const login = new LoginPage(page);
      const inventory = new InventoryPage(page);
      
      await login.goto(BASE_URL);
      const creds = users[user_key];
      await login.login(creds.username, creds.password);

      if (expected_success) {
        await expect(await inventory.isLoaded()).toBeTruthy();
      } else {
        await expect(await inventory.isLoaded()).toBeFalsy();
        const errorMsg = await login.getErrorMessage();
        expect(errorMsg && errorMsg.length > 0).toBeTruthy();
      }
    });
  }
});
