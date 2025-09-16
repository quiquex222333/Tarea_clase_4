// pages/loginPage.ts
import { Page, Locator } from "@playwright/test";
import { config } from "../utils/config";

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Selectores "combinados" como fallback para distintos HTML
    this.username = page.locator(
      'input[placeholder="Username"], input[name="username"], .oxd-input input[type="text"]'
    ).first();

    this.password = page.locator(
      'input[placeholder="Password"], input[name="password"], .oxd-input input[type="password"]'
    ).first();

    // Botón principal de login (clases observadas en la UI)
    this.loginButton = page.locator(
      'button[type="submit"].orangehrm-login-button, button.oxd-button--main'
    ).first();

    // Mensaje de error (alerta)
    this.errorMessage = page.locator('.oxd-alert-content-text');
  }

  async gotoLoginPage() {
    await this.page.goto(config.baseURL);
    // espera que el formulario sea visible (pagina SPA)
    await this.page.waitForSelector('form', { state: 'visible', timeout: 8000 });
  }

  // envia credenciales sin esperar navegación (útil para detectar mensaje de error)
  async submitCredentials(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  // Intento de login: espera EITHER dashboard (éxito) OR mensaje de error
  async login(username: string, password: string) {
    await this.submitCredentials(username, password);

    // Esperamos a que ocurra alguna de las dos cosas (éxito o error)
    await Promise.race([
      this.page.waitForSelector('.oxd-topbar-header', { timeout: 7000 }), // elemento visible al iniciar sesión con éxito
      this.errorMessage.waitFor({ state: 'visible', timeout: 7000 }),
    ]);
  }

  async getErrorMessageText(): Promise<string> {
    if (await this.errorMessage.count() > 0) {
      return (await this.errorMessage.textContent())?.trim() ?? "";
    }
    return "";
  }

  async isLoggedIn(): Promise<boolean> {
    // True si se muestra la barra superior del dashboard
    return this.page.isVisible('.oxd-topbar-header');
  }
}

