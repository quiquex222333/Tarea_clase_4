import { ROUTES } from "../utils/routes";

class LoginPage {

    constructor(page) {
        this.page = page; // Guardas el objeto page para usarlo en deamas metodos
        
        this.emailInput = '#email'; // Selector del campo email por ID
        this.passwordInput = '#password'; // Selector del campo password por ID
        this.signInButton= 'button[aria-label="Sign In"]'; // Selector del boton Sign In por su atributo aria-label
    }
    //navegacion a la pagina de login
    async goto() {
        await this.page.goto(ROUTES.LOGIN); //desde playwright.config.js y routes.js
    }

    //rellenar los campos y hacer click en el boton
    async login(email, password) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.signInButton);
    }
}


module.exports = { LoginPage };