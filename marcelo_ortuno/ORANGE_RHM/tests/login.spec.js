// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const USERS = require('../data/users.json');

test('inicio de sesion correcto', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto('/');

    const creds = USERS.valid;
    await login.login(creds.username, creds.password);

    const urlStatus = await login.getPageState();
    expect(urlStatus).toContain("/dashboard/");
});


test('inicio de sesion incorrecto', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto('/');

    const creds = USERS.invalid;
    await login.login(creds.username, creds.password);

    const errorMsg = await login.getErrorMessage();
    expect(errorMsg).toContain("Invalid credentials");
    
    const urlStatus = await login.getPageState();
    expect(urlStatus.includes("/dashboard/")).toBe(false);
});
