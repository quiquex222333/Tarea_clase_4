import { Page, Locator, expect } from '@playwright/test';

export class SoundCloudLoginPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole('button', { name: /sign in|iniciar sesión/i });
    this.emailInput = page.locator('input[type="text"], input[name="username"]'); // más flexible
    this.passwordInput = page.locator('input[type="password"]');
    this.submitButton = page.locator('button[type="submit"]');
  }

  async gotoLogin() {
    await this.page.goto('https://soundcloud.com/');
    await this.page.waitForLoadState('domcontentloaded');

    const rejectCookies = this.page.getByRole('button', { name: /rechazarlas todas/i });
    if (await rejectCookies.isVisible()) {
      await rejectCookies.click();
    }

    // Clic en el botón "Iniciar sesión"
    await this.loginButton.waitFor({ state: 'visible' });
    await this.loginButton.click();

    // Espera a que se cargue el modal
    await this.emailInput.waitFor({ timeout: 10000 });
  }

  async login(username: string, password: string) {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();

    // Verifica que el login fue exitoso
    await expect(this.page).toHaveURL(/soundcloud\.com\/you/); // Ajusta si tu URL cambia
  }
}
