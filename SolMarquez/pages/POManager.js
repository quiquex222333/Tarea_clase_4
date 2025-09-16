const {LoginPage} = require('./LoginPage');
const {SearchPage} = require('./SearchPage');


class POManager {
    constructor(page, request) {
        this.page = page;
        this.request = request;
        this.loginPage = new LoginPage(this.page);
        this.SearchPage = new SearchPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getSearchPage() {
        return this.SearchPage;
    }
}

module.exports = {POManager}