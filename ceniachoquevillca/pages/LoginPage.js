const { expect } = require('@playwright/test');

class LoginPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.userInp = "input[data-test='username']";
    this.passwordInp = "input[data-test='password']";
    this.loginBtn = "input[data-test='login-button']";
    this.errorMsg = "[data-test='error']";
  }

  async goto() {
    // En Python recibías base_url; aquí lo tomamos del baseURL global
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.fill(this.userInp, username);
    await this.page.fill(this.passwordInp, password);
    await this.page.click(this.loginBtn);
  }

  async errorMessage() {
    const err = this.page.locator(this.errorMsg);
    return (await err.isVisible()) ? (await err.textContent() || '') : '';
  }

  async expectErrorContains(text) {
    await expect(this.page.locator(this.errorMsg)).toContainText(text);
  }
}

module.exports = { LoginPage };
