
const { waitFor } = require('../utils/helpers');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page - Objeto Page que Playwright inyecta en cada test
   */
  constructor(page) {
    this.page = page;// Guardamos la referencia a la página para usarla en los métodos
    // Selectores CSS para los elementos de la página de login
    this.userInp = page.locator("input[data-test='username']");
    this.passwordInp = page.locator("input[data-test='password']");
    this.loginBtn = page.locator("input[data-test='login-button']");
    this.errorMsg = page.locator("[data-test='error']");
  }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);// Abre la página de login
  }

  async login(username, password) {
    await this.userInp.fill(username);
    await this.passwordInp.fill(password);
    await waitFor(this.page, 5); // espera 5 segundos
    await this.loginBtn.click();
  }

  async getErrorMessage() {
    if (await this.errorMsg.isVisible()) {// Verifica si el mensaje de error está visible
      return await this.errorMsg.textContent();// Devuelve el texto del mensaje
    }
    return '';// Si no hay mensaje visible, devuelve cadena vacía
  }
}

module.exports = { LoginPage };