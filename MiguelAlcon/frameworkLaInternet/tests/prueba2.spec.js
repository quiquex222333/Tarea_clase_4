import { test, expect } from '@playwright/test';
import { LoginPageTP } from '../pages/loginPageTP';


test('Login con credenciales válidas pagina2', async ({ page }) => {
  const loginPage = new LoginPageTP(page);
  await loginPage.goto();
  await loginPage.login('leugim7777','123456');

  // Validar que se redirige al dashboard
  await expect(page).toHaveURL('https://demoblaze.com/');
});