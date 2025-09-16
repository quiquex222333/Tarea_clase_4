import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { TaxCategoriesPage } from '../pages/taxCategoryPage';
import users from '../../data/users.json';
import { BASE_URL } from '../utils/config';
import { screenshotPath, waitFor, waitFor2, waitFor5, waitFor10 } from '../utils/helpers';

test('Crear tax category con datos aleatorios', async ({ page }) => {
  test.setTimeout(120000);
  
  console.log('🚀 Iniciando test con datos aleatorios...');
  
  const loginPage = new LoginPage(page);
  const taxCategoriesPage = new TaxCategoriesPage(page);
  
  // 1. Login
  console.log('1. Haciendo login...');
  await loginPage.goto(BASE_URL);
  await loginPage.login(users.admin.username, users.admin.password);
  
  // Verificar login
  const isLoggedIn = await loginPage.isLoggedIn();
  expect(isLoggedIn).toBeTruthy();
  console.log(' Login exitoso');
  
  // 2. Crear tax category con datos aleatorios
  console.log('2.  Creando tax category...');
  const result = await taxCategoriesPage.createTaxCategory();
  
  // 3. Verificar resultado
  console.log('3. Verificando resultado...');
  expect(result.success).toBeTruthy();
  
  if (result.success) {
    console.log(` ¡Tax category "${result.name}" creado exitosamente!`);
    
    // 4. Verificar que existe en la lista
    console.log('4. Verificando en la lista...');
    const existsInList = await taxCategoriesPage.verifyTaxCategoryExists(result.code);
    console.log('¿Aparece en la lista?', existsInList);
    
    // Tomar screenshot final
    await page.screenshot({ path: 'tax-creation-success.png' });
    
  } else {
    console.log(' Falló la creación del tax category');
    await page.screenshot({ path: 'tax-creation-failed.png' });
    throw new Error('No se pudo crear el tax category');
  }
  
  console.log('Test completado exitosamente!');
});