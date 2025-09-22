class LoginPage {
  constructor(page) {
    this.page = page;
    this.user_inp = page.locator('input[name="username"]');
    this.password_inp = page.locator('input[name="password"]');
    this.login_btn = page.locator('button[type="submit"]');
    this.dashboard_Header = page.locator('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module');
    this.error_msg = page.locator('.oxd-alert-content-text');
  }

  async goto() {
    //await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.goto('/web/index.php/auth/login');

  }

  async login(username, password) {
    await this.user_inp.fill(username);
    await this.password_inp.fill(password);
    await this.login_btn.click();
  }

  async isLoggedIn() {
    await this.page.waitForLoadState('domcontentloaded');
    return await this.dashboard_Header.isVisible();
  }

  async getError() {

    return await this.error_msg.textContent();
  }
}

module.exports = { LoginPage };