const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const USERS = require('../data/users.json'); // Importa el archivo JSON de usuarios

test.describe('Login tests', () => {
    const testCases = [
        { key: "valido", expectSuccess: true },
        { key: "invalido", expectSuccess: false }
    ];

    test.beforeEach(async ({ page }) => {
        await page.goto('/en'); // Navegar al estado inicial antes de cada test
    });

    for (const { key, expectSuccess } of testCases) {
        test(`login test: ${key}`, async ({ page }) => {
            const login = new LoginPage(page);
            await login.goto('/');

            const creds = USERS[key]; // Obtiene las credenciales correspondientes
            await login.login(creds.username, creds.password);

            if (expectSuccess) {
                const loggedIn = await login.isLoggedIn();
                expect(loggedIn).toBe(true);
            } else {
                const errorMsg = await login.getErrorMessage();
                expect(errorMsg).not.toBe(""); // valida que haya mensaje de error
                console.log(`Mensaje de error para ${key}:`, errorMsg);
            }
        });
    }
});
