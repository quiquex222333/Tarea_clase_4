
const { test } = require('@playwright/test');
const { testConfig } = require('../Data/login_data');
const { LoginPage } = require('../pages/LoginPage');

test('TC_01 Login User with correct user and password', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.navigateToUrl(testConfig.url);
        await loginpage.validateLogin(testConfig.username, testConfig.password);
    })