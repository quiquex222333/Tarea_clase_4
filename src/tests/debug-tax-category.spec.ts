import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import users from '../../data/users.json';
import { BASE_URL } from '../utils/config';

test('Debug: Tax Category Creation', async ({ page }) => {
  test.setTimeout(120000);
  
  console.log('=== INICIANDO DEBUG ===');
  
  const loginPage = new LoginPage(page);
  
  // Paso 1: Login
  console.log('1. Haciendo login...');
  await loginPage.goto(BASE_URL);
  await loginPage.login(users.admin.username, users.admin.password);
  
  const isLoggedIn = await loginPage.isLoggedIn();
  console.log('¿Login exitoso?', isLoggedIn);
  
  // Tomar screenshot después del login
  await page.screenshot({ path: 'debug-after-login.png' });
  
  // Paso 2: Ir directamente a tax categories
  console.log('2. Navegando directamente a tax categories...');
  await page.goto('https://demo.sylius.com/admin/tax-categories');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'debug-tax-categories-list.png' });
  
  // Paso 3: Verificar si existe el botón Create
  const createButton = await page.locator('a:has-text("Create"), button:has-text("Create")').isVisible().catch(() => false);
  console.log('¿Botón Create visible?', createButton);
  
  if (createButton) {
    console.log('3. Haciendo clic en Create...');
    await page.click('a:has-text("Create"), button:has-text("Create")');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'debug-create-page.png' });
    
    // Paso 4: Buscar todos los inputs en la página
    const allInputs = await page.$$eval('input', inputs => 
      inputs.map(input => ({
        name: input.name,
        id: input.id,
        type: input.type,
        placeholder: input.placeholder
      }))
    );
    console.log('Todos los inputs encontrados:', allInputs);
    
    // Buscar específicamente inputs de tax category
    const taxInputs = allInputs.filter(input => input.name.includes('tax') || input.name.includes('category'));
    console.log('Inputs de tax category:', taxInputs);
  }
  
  console.log('=== DEBUG COMPLETADO ===');
});