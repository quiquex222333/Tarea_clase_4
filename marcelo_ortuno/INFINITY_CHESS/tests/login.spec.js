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
    expect(urlStatus).toContain("/home/");
});


test('inicio de sesion contraseña invalida', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto('/');

    const creds = USERS.invalidPassword;
    await login.login(creds.username, creds.password);

    const errorMsg = await login.getErrorMessage();
    expect(errorMsg).toContain("Contraseña Incorrecta");
    
    const urlStatus = await login.getPageState();
    expect(urlStatus.includes("/home/")).toBe(false);
    //console.log("TEST FINALIZADO");
});

test('inicio de sesion usuario invalido', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto('/');

    const creds = USERS.invalidUserName;
    await login.login(creds.username, creds.password);

    const errorMsg = await login.getErrorMessage();
    expect(errorMsg).toContain("ID Incorrecto");
    
    const urlStatus = await login.getPageState();
    expect(urlStatus.includes("/home/")).toBe(false);
});