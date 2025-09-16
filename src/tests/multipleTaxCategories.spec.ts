// src/tests/multipleTaxCategories.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { TaxCategoriesPage } from '../pages/taxCategoryPage';
import users from '../../data/users.json';
import { BASE_URL } from '../utils/config';
import { screenshotPath, waitFor, waitFor2, waitFor5, waitFor10 } from '../utils/helpers';

test('Crear múltiples tax categories', async ({ page }) => {
  test.setTimeout(180000);
  
  const loginPage = new LoginPage(page);
  const taxCategoriesPage = new TaxCategoriesPage(page);
  
  // Login
  await loginPage.goto(BASE_URL);
  await loginPage.login(users.admin.username, users.admin.password);
  
  // Crear 3 tax categories diferentes
  const results = [];
  
  for (let i = 1; i <= 3; i++) {
    console.log(`Creando tax category #${i}...`);
    
    // Ir a la página de creación para cada uno
    await page.goto('https://demo.sylius.com/admin/tax-categories/new');
    await page.waitForLoadState('networkidle');
    
    // Datos únicos para cada uno
    const timestamp = Date.now();
    const name = `Tax Cat ${i} - ${timestamp}`;
    const code = `TAX_${i}_${timestamp}`;
    const description = `Descripción ${i} - ${timestamp}`;
    
    // Llenar formulario
    await page.fill('input[name="sylius_admin_tax_category[name]"]', name);
    await page.fill('input[name="sylius_admin_tax_category[code]"]', code);
    await page.fill('textarea[name="sylius_admin_tax_category[description]"]', description);
    
    // Guardar
    await page.click('button[type="submit"].btn-primary');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    results.push({ name, code, success: !page.url().includes('/new') });
  }
  
  // Verificar resultados
  const successfulCreations = results.filter(r => r.success).length;
  console.log(` ${successfulCreations} de 3 tax categories creados exitosamente`);
  
  expect(successfulCreations).toBeGreaterThan(0);
});