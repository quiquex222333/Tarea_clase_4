import { Page, Locator } from '@playwright/test';
import { screenshotPath, waitFor2 } from '../utils/helpers';

export class LoginPage {
  readonly page: Page;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorMessage = page.locator('[data-test="error"]'); //locator definido
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login-button"]');
  }

  getErrorMessage(): Locator {
    return this.errorMessage; // asegurado como Locator
  }
}
