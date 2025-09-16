class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.user_inp = "input[name='username']";
        this.password_inp = "input[name='password']";
        this.login_button = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button';
        this.error_msg = "//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p";
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