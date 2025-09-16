class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.signIn_link = "a.nav-link:has-text('Log in')";
        this.account_inp = "input[name='email']";
        this.password_inp = "input[name='password']";
        this.login_button = "button[type='submit']:has-text('Login')";
        this.error_msg = "div.alert.alert-danger";
        this.dashboard_user_avatar = "img.avatar.wh-40";
    }

    async goto(baseUrl) {
        await this.page.goto(baseUrl);
    }

    async login(username, password) {
        await this.page.waitForSelector(this.signIn_link);  // Esperamos a que el enlace sea visible
        await this.page.click(this.signIn_link);
        await this.page.waitForSelector(this.account_inp);  // Esperamos a que el campo de correo sea visible
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
            console.log('Error al obtener mensaje de error:', e);  // Proveer más información en caso de error
            return "";
        }
    }

    async isLoggedIn() {
        try {
            await this.page.waitForURL("**/dashboard", { timeout: 10000 }); // Esperamos a que se redirija a la página de dashboard
            // Esperamos que el avatar del usuario logueado esté visible en la página
            await this.page.waitForSelector(this.dashboard_user_avatar, { state: "visible", timeout: 5000 });
            return true;  // El usuario está logueado
        } catch (e) {
            console.log('Error al verificar el login:', e);  // Proveer más información en caso de error
            return false;  // Si no pasa la verificación, retornamos false
        }
    }
}

module.exports = { LoginPage };