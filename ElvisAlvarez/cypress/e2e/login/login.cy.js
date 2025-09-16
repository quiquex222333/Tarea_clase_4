import LoginPage from "../../pages/login_page";

describe("Login Sylius", () => {
    let adminUser;

    before(() => {
        cy.fixture('users').then((users) => {
            adminUser = users.admin;
        });
    });

    it('Iniciar sesion con credenciales validas', () => {
        cy.login(adminUser);

        const loginPage = new LoginPage();
        loginPage.checkDashboard();
    });

    it('Iniciar sesion con credenciales invalidas', () => {
        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.fillEmail('email@example.com');
        loginPage.fillPassword('123456');
        loginPage.submit();

        loginPage.checkError('Invalid credentials.');
    });
});