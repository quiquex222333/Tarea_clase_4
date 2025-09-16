class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.user_inp = "input[id='id']";
        this.password_inp = "input[id='contraseña']";
        this.login_button = '//*[@id="root"]/div/div[1]/div/div[2]/button';
        this.error_msg = "//div[@role='status' and @aria-live='polite']";
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
            await locator.waitFor({ state: "visible", timeout: 3000 });
            return await locator.textContent();
        } catch (e) {
            return "";
        }
    }

    async getPageState() {
        try {      
            await this.page.waitForNavigation({ timeout: 3000 });
        } catch (e) {

        }
        return this.page.url();
    }
}

module.exports = { LoginPage };