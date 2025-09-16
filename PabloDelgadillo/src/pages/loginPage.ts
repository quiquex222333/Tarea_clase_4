import { Page } from '@playwright/test';
import { waitFor5 } from '../utils/helpers';

export class LoginPage {
  private page: Page;
  private userInp = "input[data-test='username']";
  private passwordInp = "input[data-test='password']";
  private loginBtn = "input[data-test='login-button']";
  private errorMsg = "[data-test='error']";

  constructor(page: Page) {
    this.page = page;
  }

  async goto(baseUrl: string) {
    await this.page.goto(baseUrl);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.userInp, username);
    await this.page.fill(this.passwordInp, password);
    await waitFor5();
    await this.page.click(this.loginBtn);
  }

  async getErrorMessage(): Promise<string> {
    const error = await this.page.locator(this.errorMsg).textContent();
    return error || '';
  }
}
