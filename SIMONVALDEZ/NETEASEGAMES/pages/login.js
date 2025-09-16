class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.login_op = "div.other-container-item.sp:has-text('Log In')";
        this.account_inp = "input[name='account']"; 
        this.password_inp = "input[name='hash_password']";  
        this.login_button = "div.login-in-button.page-button";
        this.error_msg = "div.toast-container p.toast-text";
    }

    async goto(baseUrl) {
        await this.page.goto(baseUrl);
    }

    async login(username, password) {
        await this.page.click(this.login_op);
        await this.page.fill(this.account_inp, username);
        await this.page.fill(this.password_inp, password);
        await this.page.click(this.login_button);
    }

    async getErrorMessage() {
        const locator = this.page.locator(this.error_msg);
        try {
            await locator.waitFor({ state: "visible", timeout: 3000 });
            return await locator.textContent();
        } catch (e) {
            return "";
        }
    }

    async isLoggedIn() {
        try {
            await this.page.waitForURL("**/account/**", { timeout: 8000 });
            const url = this.page.url();
            return url.includes("/account/");
        } catch (e) {
            return false;
        }
    }
}

module.exports = { LoginPage };