const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const users = require('../data/users.json');

test.describe('Login variantes', () => {
  for (const [userKey, expectedSuccess] of [
    ['valid', true],
    ['locked', false],
    ['invalid', false],
  ]) {
    test(`Login con usuario valido ${userKey}`, async ({ page }) => {
      const login = new LoginPage(page);
      await login.goto();
      const creds = users[userKey];
      await login.login(creds.username, creds.password);

      if (expectedSuccess) {
        await expect(page).toHaveURL(/inventory/);
      } else {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }
    });
  }
});