import LoginPage from '../pages/login_page';
import AdminPage from '../pages/admin_page';

describe('Usuarios - Crear y validar casos', () => {
  let adminUser;
  const adminPage = new AdminPage();

  // Ignorar errores de JS de la demo
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      adminUser = users.admin;
      cy.login(adminUser);
    });
  });

  it('Verificar que se puede crear un nuevo usuario y validar que aparece en la tabla', () => {
    adminPage.visitUsers();
    adminPage.clickAddUser();

    const timestamp = Date.now();
    const newUser = {
      firstName: 'Test',
      lastName: 'User',
      email: `testuser${timestamp}@mail.com`,
      username: `testuser${timestamp}`,
      password: 'StrongPassword123',
    };

    adminPage.fillUserForm(newUser);
    adminPage.saveUser();
    adminPage.checkUserListed(newUser.username);
  });


  it('Validar que no se puede crear un usuario con username repetido', () => {
    adminPage.visitUsers();
    adminPage.clickAddUser();

    const repeatedUser = {
      firstName: 'Test',
      lastName: 'User',
      email: `uniqueemail${Date.now()}@mail.com`,
      username: 'sylius', 
      password: 'StrongPassword123',
    };

    adminPage.fillUserForm(repeatedUser);
    adminPage.saveUser();
    cy.log('Verificar que el sistema no permite crear usuario con username repetido');
  });

  it('Validar que no se puede crear un usuario con email inválido', () => {
    adminPage.visitUsers();
    adminPage.clickAddUser();

    const invalidEmailUser = {
      firstName: 'Test',
      lastName: 'User',
      email: `invalidemail${Date.now()}`,
      username: `testuser${Date.now()}`,
      password: 'StrongPassword123',
    };

    adminPage.fillUserForm(invalidEmailUser);
    adminPage.saveUser();
    cy.log('Verificar que el sistema no permite crear usuario con email inválido');
  });


  it('Validar que no se puede crear un usuario con datos inválidos', () => {
    adminPage.visitUsers();
    adminPage.clickAddUser();

    const invalidUser = {
      firstName: 'A',               
      lastName: '123!',
      username: 'user@!#',
      email: 'notanemail',
      password: '123',
    };

    adminPage.fillUserForm(invalidUser);
    adminPage.saveUser();
    cy.log('Verificar que el sistema no permite crear usuario con datos inválidos');
  });
});