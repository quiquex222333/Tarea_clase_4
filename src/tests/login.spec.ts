import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import users from '../../data/users.json';
import { BASE_URL } from '../utils/config';

test('Login en Sylius Demo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto(BASE_URL);
  await loginPage.login(users.admin.username, users.admin.password);
  
  // Verificar que el login fue exitoso
  const isLoggedIn = await loginPage.isLoggedIn();
  expect(isLoggedIn).toBeTruthy();
});