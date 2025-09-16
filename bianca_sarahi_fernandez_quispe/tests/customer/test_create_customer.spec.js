const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../../pages/login_page');
const { CustomerPage } = require('../../pages/customer_page');
const acceso = require('../../data/acceso.json');


test ('Crear cliente con datos obligatorios', async ({ page }) => {
    //1 login
    const login_page = new LoginPage(page);
    await login_page.goto();
    await login_page.login(acceso.valido[0].email, acceso.valido[0].password);

    await expect(page).toHaveTitle('Dashboard');

    // 2 create custoemr
    const customer_page = new CustomerPage(page);
    await customer_page.goto();

    await customer_page.createCustomer({
        firstName: 'Bianca',
        lastName: 'Fernandez',
        email: 'bianca222235@gmail.com', //arreglar para crear distintos emails
        gender: 'Female'
    });

    await expect(page.locator(`text=Customer created successfully`)).toBeVisible();
});