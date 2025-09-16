const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login_page');
const acceso = require('../../data/acceso.json');

const casos = [
    {
        nombre: 'Caso 1: Inicio de sesion exitoso con credenciales validas',
        datos: acceso.valido,
        esperado: 'Dashboard' //title
    },
    {
        nombre: 'Caso 2: Inicio de sesion fallido con credenciales invalidas',
        datos: acceso.invalido,
        esperado: 'Sign In' //title
    }
];

// console.log(acceso);
// console.log('------------------');
// console.log(acceso.valido);
// console.log('------------------');
// console.log(acceso.invalido);
// console.log('------------------');
// console.log(acceso.invalido[0]);
// console.log('------------------');
// console.log(acceso.valido[0])

//recorriendo los casos
casos.forEach(({ nombre, datos, esperado }) => {
    // Agrupa los tests bajo un describe con el nombre del caso (válido o inválido)
    test.describe(nombre, () => {
        for (var i = 0; i < datos.length; i++) {
            const credenciales = datos[i];
            // un test por cada credencial de acceso
            test(`TC: Login con email "${credenciales.email}" y password: "${credenciales.password}"`, async ({ page }) => {
                const login_page = new LoginPage(page);
                await login_page.goto();
                await login_page.login(credenciales.email, credenciales.password);
                await expect(page).toHaveTitle(esperado);  // <title>Dashboard o Sign In</title>
            });
        }
    });
});