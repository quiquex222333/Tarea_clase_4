const { chromium } = require('@playwright/test');
const { POManager } = require('./pages/POManager');
const { testConfig } = require('./Data/login_data');
const fs = require('fs-extra');
const sleep = require('./Utils/utils');

const folderPath = './my-allure-results';

module.exports = async config => {
    const { storageState, baseURL } = config.projects[0].use;
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new POManager(page);
    const loginpage = poManager.getLoginPage();
    try {
        await loginpage.navigateToUrl(baseURL);
        await sleep(5000);
        await loginpage.validateLogin(testConfig.username, testConfig.password);
        await sleep(5000);
        await context.storageState({ path: storageState });
        await fs.rm(folderPath, { recursive: true, force: true });
        await browser.close();
    } catch (error) {
        console.error(error.message);
        await browser.close();
        throw error;
    }
};