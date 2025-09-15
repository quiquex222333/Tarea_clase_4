import LoginPage from '../pages/login_page';

describe('Login Sylius', () => {
    let adminUser;
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            adminUser = users.admin;
        });
    });

    it('should login successfully with valid credentials', () => {
        cy.login(adminUser);
        const loginPage = new LoginPage();
        loginPage.checkDashboard();
    });

    it('should show error message with invalid credentials', () => {
        cy.fixture('users').then((users) => {
            const invalidUser = users.invalidUser;
            cy.login(invalidUser);
            const loginPage = new LoginPage();
            loginPage.checkError('Invalid credentials.');
        });
    });
});
