class LoginPage {
  constructor(page) {
    this.page = page;
    this.user_inp = page.locator('input[data-test="username"]');
    this.password_inp = page.locator('input[data-test="password"]');
    this.login_btn = page.locator('input[data-test="login-button"]');
  }

  async goto() {
    //await this.page.goto('https://www.saucedemo.com/');
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.user_inp.fill(username);
    await this.password_inp.fill(password);
    await this.login_btn.click();
  }
}

module.exports = { LoginPage };