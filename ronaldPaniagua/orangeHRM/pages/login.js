class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.user_inp = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input';
        this.password_inp = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input';
        this.login_button = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button';
        this.error_msg = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]';
    }

    async goto(baseUrl) {
        await this.page.goto(baseUrl);
    }

    async login(username, password) {
        await this.page.fill(this.user_inp, username);
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
        await this.page.waitForURL('**/web/index.php/dashboard/**', { timeout: 5000 });
        return true;
    } 
    catch {
    return false;
    }
}
}

module.exports = { LoginPage };