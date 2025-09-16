import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import dotenv from 'dotenv';
dotenv.config();

test('Login con credenciales válidas pagina1', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith','SuperSecretPassword!');

  // Validar que se redirige al dashboard
  await expect(page).toHaveURL(`${process.env.BASE_URL}/secure`);
});