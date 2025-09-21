class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.button_log= '//*[@id="navbar-collapse-header"]/div/a[1]' 
        this.user_inp = 'input[id="input-email"]';
        this.password_inp = 'input[id="input-password"]';
        this.login_button = '//*[@id="account-login"]/div[2]/div/div[1]/form/div[3]/div[1]/button[1]';
    }

    async goto(baseUrl) {
        await this.page.goto(baseUrl);
    }

    async login(email, password) {
        await this.page.click(this.button_log);
        await this.page.fill(this.user_inp, email);
        await this.page.fill(this.password_inp, password);
        await this.page.click(this.login_button);
    }

    async getErrorMessage() {
        const locator = this.page.locator(this.error_msg);
        try {
            await locator.waitFor({ state: "visible", timeout: 10000 });
            return await locator.textContent();
        } catch (e) {
            return "";
        }
    }

    async isLoggedIn() {
    try {
        await this.page.waitForURL('**/index.php?route=account/account*', { timeout: 5000 });
        return true;
    } 
    catch {
    return false;
    }
}
}

module.exports = { LoginPage };