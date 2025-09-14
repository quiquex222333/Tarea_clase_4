import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import users from '../data/users.json';
import { Assertions } from '../utils/assertions.js';

export const test = base.extend({
  loginAsValidUser: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.valid.username, users.valid.password);
    await Assertions.shouldBeOnInventoryPage(page);
    await use(page); // entrega la página ya logueada y validada
  }
});

export { expect } from '@playwright/test';
