// utils/global-setup.js
import { chromium } from '@playwright/test';
import { login_page_orange } from '../pages/login_page_orange.js';
import { users } from '../data/users.js';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });

  const loginPage = new login_page_orange(page);
  await loginPage.login(users.admin.user, users.admin.password);
  await context.storageState({ path: 'storageState.json' });
    console.log('Sesión guardada en storageState.json ✅');
  await browser.close();
}

export default globalSetup;
