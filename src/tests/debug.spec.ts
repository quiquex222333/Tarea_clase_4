import { test } from '@playwright/test';
import { BASE_URL } from '../utils/config';
import { screenshotPath, waitFor, waitFor2, waitFor5, waitFor10 } from '../utils/helpers';

test('Debug: Verificar página de login', async ({ page }) => {
  console.log('Navegando a:', `${BASE_URL}/admin/login`);
  
  // Ir a la página y tomar screenshot
  await page.goto(`${BASE_URL}/admin/login`);
  await page.screenshot({ path: 'debug-login-page.png', fullPage: true });
  
  // Obtener el HTML completo de la página
  const htmlContent = await page.content();
  console.log('HTML de la página (primeros 1000 caracteres):');
  console.log(htmlContent.substring(0, 1000));
  
  // Verificar el título de la página
  const title = await page.title();
  console.log('Título de la página:', title);
  
  // Verificar la URL actual
  const currentUrl = page.url();
  console.log('URL actual:', currentUrl);
  
  // Buscar elementos comunes de formulario
  const inputs = await page.$$eval('input', inputs => 
    inputs.map(input => ({
      type: input.type,
      name: input.name,
      id: input.id,
      placeholder: input.placeholder,
      className: input.className
    }))
  );
  
  console.log('Inputs encontrados:', inputs);
  
  // Buscar botones
  const buttons = await page.$$eval('button', buttons => 
    buttons.map(button => ({
      type: button.type,
      text: button.textContent?.trim(),
      className: button.className
    }))
  );
  
  console.log('Botones encontrados:', buttons);
  
  // Esperar un momento para que puedas ver lo que pasa
  await page.waitForTimeout(5000);
});