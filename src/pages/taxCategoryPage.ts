import { Page } from '@playwright/test';

export class TaxCategoriesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createTaxCategory() {
    console.log('🎯 Creando tax category con selectores correctos...');
    
    // 1. Ir directamente a la página de creación
    await this.page.goto('https://demo.sylius.com/admin/tax-categories/new');
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(2000);
    
    // 2. Generar datos aleatorios
    const timestamp = Date.now();
    const randomName = `Tax Category ${timestamp}`;
    const randomCode = `TAX_${timestamp}`;
    const randomDescription = `Descripción de prueba para tax category ${timestamp}`;
    
    console.log(`Datos generados: ${randomName}, ${randomCode}`);
    
    // 3. USAR SELECTORES EXACTOS (los que me compartiste)
    // Esperar a que los inputs estén visibles
    await this.page.waitForSelector('input[name="sylius_admin_tax_category[name]"]', { timeout: 15000 });
    await this.page.waitForSelector('input[name="sylius_admin_tax_category[code]"]', { timeout: 15000 });
    
    // 4. Llenar el formulario con datos aleatorios
    await this.page.fill('input[name="sylius_admin_tax_category[name]"]', randomName);
    await this.page.fill('input[name="sylius_admin_tax_category[code]"]', randomCode);
    await this.page.fill('textarea[name="sylius_admin_tax_category[description]"]', randomDescription);
    
    // 5. Tomar screenshot antes de guardar
    await this.page.screenshot({ path: 'before-saving-tax-category.png' });
    
    // 6. Hacer clic en el botón CORRECTO
    await this.page.click('button[type="submit"].btn-primary');
    
    // 7. Esperar a que se procese
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(3000);
    
    // 8. Verificar éxito
    const success = await this.isSuccess();
    console.log(' ¿Creación exitosa?', success);
    
    return { success, name: randomName, code: randomCode };
  }

  async isSuccess(): Promise<boolean> {
    // Verificar múltiples indicadores de éxito
    const currentUrl = this.page.url();
    
    // 1. Si estamos en la lista de tax categories (no en new/edit)
    if (currentUrl.includes('/admin/tax-categories') && 
        !currentUrl.includes('/new') && 
        !currentUrl.includes('/edit')) {
      return true;
    }
    
    // 2. Mensajes de éxito
    const successSelectors = [
      '.positive.message',
      '.alert-success',
      '.ui.success.message',
      '.sylius-flash-message',
      'text=/success/i',
      'text=/created/i',
      'text=/has been successfully created/i'
    ];
    
    for (const selector of successSelectors) {
      try {
        if (await this.page.locator(selector).isVisible({ timeout: 3000 })) {
          return true;
        }
      } catch (error) {
        continue;
      }
    }
    
    return false;
  }

  // Método para verificar si el tax category existe en la lista
  async verifyTaxCategoryExists(code: string): Promise<boolean> {
    await this.page.goto('https://demo.sylius.com/admin/tax-categories');
    await this.page.waitForLoadState('networkidle');
    
    try {
      // Buscar en la tabla por el código
      const table = this.page.locator('table');
      return await table.locator(`tr:has-text("${code}")`).isVisible({ timeout: 5000 });
    } catch (error) {
      return false;
    }
  }
}