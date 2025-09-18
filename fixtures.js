// conftest.js
import { test as base } from '@playwright/test';

export const test = base.extend({
  loggedInPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: 'storageState.json' });
    console.log("Se recupera sesión desde storageState.json ✅");
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

export { expect } from '@playwright/test';