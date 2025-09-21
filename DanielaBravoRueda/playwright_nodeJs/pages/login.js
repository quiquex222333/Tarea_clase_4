class LoginPage{

    // Selectores del la pagina Objeto
    constructor(page){
        this.page = page;
        this.username_input = "#user-name";
        this.password_input = "#password";
        this.login_button = "#login-button"
        this.error_msg = '[data-test="error"]';
    }

    async goto(baseUrl){
        await this.page.goto(baseUrl)
    }


    async login(username,password){
        await this.page.fill(this.username_input,username)
        await this.page.fill(this.password_input,password)
        await this.page.click(this.login_button)
    
    }

    async getErrorMsg() {
       const errorMsg = this.page.locator(this.error_msg);
       if (await errorMsg.isVisible()) {
           return await errorMsg.textContent(); 
        } else {
           return "";
        }
}


}

module.exports = {LoginPage};