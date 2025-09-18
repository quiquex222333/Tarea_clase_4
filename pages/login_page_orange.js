import { expect } from '@playwright/test';

export class login_page_orange {
  constructor(page) {
    this.page = page;
     this.user = 'input[name="username"]';
     this.pwd  = 'input[name="password"]'; 
     this.btn  = 'button[type="submit"]'; 
  }

  async login(email, password) {
    await this.page.fill(this.user, email);
    await this.page.fill(this.pwd, password);
    await this.page.click(this.btn);
    await this.page.locator('h6', { hasText: 'Dashboard' }).waitFor({
      state: 'visible',
      timeout: 30000
    });

    console.log('Login exitoso ✅');
  }
}