import LoginPage from '../pages/login_page';

describe('Login Sylius', () => {
    let adminUser;
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            adminUser = users.admin;
        });
    });

    it('iniciar sesión correctamente con credenciales válidas', () => {
        cy.login(adminUser);
        const loginPage = new LoginPage();
        loginPage.checkDashboard();
    });

    it('mostrar un mensaje de error con credenciales inválidas', () => {
        cy.fixture('users').then((users) => {
            const invalidUser = users.invalidUser;
            cy.login(invalidUser);
            const loginPage = new LoginPage();
            loginPage.checkError('Invalid credentials.');
        });
    });
});
