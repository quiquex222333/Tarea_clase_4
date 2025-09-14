import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import users from '../data/users.json';

export const test = base.extend({
  loginAsValidUser: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.valid.username, users.valid.password);
    await use(page); // entrega la página ya logueada
  }
});

export { expect } from '@playwright/test';
