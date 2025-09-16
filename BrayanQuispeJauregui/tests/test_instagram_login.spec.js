const { test, expect } = require('@playwright/test');
const { InstagramLoginPage } = require('../pages/instagramLoginPage');
const data = require('../data/instagram_users.json');

test.describe('Instagram Login Tests', () => {

  test('Login válido en Instagram', async ({ page }) => {
    const loginPage = new InstagramLoginPage(page);

    await loginPage.goto(data.url);
    await loginPage.login(data.valid.username, data.valid.password);

    // esperamos que ya no estemos en la página de login
    await page.waitForTimeout(5000);
    await expect(page).not.toHaveURL(/login/);
  });

  test('Login inválido en Instagram', async ({ page }) => {
    const loginPage = new InstagramLoginPage(page);

    await loginPage.goto(data.url);
    await loginPage.login(data.invalid.username, data.invalid.password);

    // debería seguir en login
    await loginPage.expectLoginError();
  });

});
