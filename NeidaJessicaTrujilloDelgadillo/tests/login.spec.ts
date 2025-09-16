import { test, expect } from '../fixtures/test-fixtures';

test.describe('Login tests', () => {
  test('Usuario ingresa con las credenciales validas', async ({ loginPage, productsPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(await productsPage.isLoaded()).toBeTruthy();
  });

  test('usuario bloqueado ve un mensaje de error', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    
    await expect(loginPage.getErrorMessage()).toContainText(
      'user has been locked out'
    );
  });
});
