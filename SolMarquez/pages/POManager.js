const {LoginPage} = require('./LoginPage');

class POManager {
    constructor(page, request) {
        this.page = page;
        this.request = request;
        this.loginPage = new LoginPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }
}

module.exports = {POManager}