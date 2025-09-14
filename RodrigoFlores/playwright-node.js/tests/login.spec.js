import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import users from '../data/users.json';
import { Assertions } from '../utils/assertions.js';
import { logger } from '../utils/logger.js';

test.describe('Login - SauceDemo', () => {
  const cases = Object.entries(users); 

  for (const [key, data] of cases) {
    test(`Login case: ${key}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(data.username, data.password);

      if (data.expected === 'success') {
        await Assertions.shouldBeOnInventoryPage(page);
        logger.info(`Caso "${key}": login exitoso.`);
      } else {
        const error = await loginPage.getErrorMessage();
        await Assertions.shouldSeeErrorMessage(error, data.expected);
        logger.warn(`Caso "${key}": login fallido validado.`);
      }
    });
  }
});

