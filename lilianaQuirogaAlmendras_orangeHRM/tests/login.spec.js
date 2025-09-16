const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const users = require('../data/users.json');

  test('Login con credenciales validos', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.valid.username, users.valid.password);
  });

  test('Mostrar dashboard page', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.valid.username, users.valid.password);
    await expect(login.dashboard_Header).toBeVisible();
  });

    test('Verificar mensaje de error con credenciales invalidos', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.invalid.username, users.invalid.password);
    await expect(login.error_msg).toBeVisible();
  });