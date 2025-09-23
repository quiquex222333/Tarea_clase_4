const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const users = require('../data/users.json');
const { screenshotPath } = require('../utils/helpers');

// “Parametrización” estilo pytest:
const cases = [
  { key: 'valid',   expectedSuccess: true  },
  { key: 'locked',  expectedSuccess: false },
  { key: 'invalid', expectedSuccess: false },
  //{ key: 'ejemplo', expectedSuccess: true  }
];

for (const c of cases) {
  test(`Login variado: ${c.key}`, async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    try {
      await login.goto();
      const creds = users[c.key];
      await login.login(creds.username, creds.password);

      if (c.expectedSuccess) {
        expect(await inventory.isLoaded()).toBeTruthy();
      } else {
        expect(await inventory.isLoaded()).toBeFalsy();
        expect(await login.errorMessage()).not.toEqual('');
      }
    } catch (err) {
      await page.screenshot({ path: screenshotPath(`login_${c.key}_fail`) });
      throw err;
    }
  });
}
