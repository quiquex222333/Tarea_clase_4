const {expect} = require('@playwright/test');

export class LoginPage {
    constructor(page) {
        this.page = page;
        const loginContainer = page.locator('mat-card-actions');
        this.loginBtn = loginContainer.getByRole('button', { name: 'Login' });
        this.userNameField = page.locator('#mat-input-0')
        this.passwordField =  page.locator('#mat-input-1')
    }
    async navigateToUrl(url) {
        await this.page.goto(url);
    }
    async validateLogin(username, password) {
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }
}