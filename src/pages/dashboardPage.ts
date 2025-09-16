import { Page } from '@playwright/test';

export class DashboardPage {
  private page: Page;
  private dashboardHeader = "h1:has-text('Dashboard')"; // Ajusta según tu Sylius
  private userMenu = ".user-menu"; // Ajusta según tu Sylius

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded(): Promise<boolean> {
    try {
      // Verifica elementos que solo existen cuando el login es exitoso
      return await this.page.locator(this.dashboardHeader).isVisible() || 
             await this.page.locator(this.userMenu).isVisible();
    } catch (error) {
      return false;
    }
  }
}