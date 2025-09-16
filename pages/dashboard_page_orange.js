import { expect } from '@playwright/test';

export class DashboardPageOrange {
  constructor(page) {
    this.page = page;
    this.dashboardHeader = 'h6'; 
    this.timeAtWorkCard = 'p.oxd-text'; 
    this.botonHorasTrabajadas = 'button:has(i.oxd-icon.bi-stopwatch)';
  }
  async waitForDashboard() {
    await this.page.locator(this.dashboardHeader, { hasText: 'Dashboard' }).waitFor({
      state: 'visible',
      timeout: 30000,
    });
  }
  async verifyTimeAtWorkVisible() {
    const locator = this.page.locator(this.timeAtWorkCard, { hasText: 'Time at Work' });
    await expect(locator).toBeVisible({ timeout: 3000 });
  }

  async clickBotonHorasTrabajadas() {
    const locator = this.page.locator(this.botonHorasTrabajadas);
    await expect(locator).toBeVisible({ timeout: 30000 });
    await locator.click();
    const textoEsperado = this.page.locator('h6',{hasText:"Punch In"});
    await expect(textoEsperado).toBeVisible({ timeout: 3000 });
    console.log('Clic en botón Horas Trabajadas y verificación de Punch In ✅');
  }


}