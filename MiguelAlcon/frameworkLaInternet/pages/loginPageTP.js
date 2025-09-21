import dotenv from 'dotenv';
dotenv.config();

export class LoginPageTP {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.botonAcceso = page.locator('#login2')
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]');
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL2);
  }

  async login(username, password) {
    await this.botonAcceso.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}