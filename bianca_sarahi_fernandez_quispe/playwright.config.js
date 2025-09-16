import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: 'tests',

    // Run all tests in parallel.
    //fullyParallel: true,

    // reporte a usar
    reporter: 'html',

    // aqui definimos las opciones globales que se aplican a todos los tests
    use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: 'https://demo.bagisto.com',
        headless: false, //headless false para ver la ejecucion en un navegador
        screenshot: 'only-on-failure', //toma screenshot solo cuando un test falla
    },
    // navegadores
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ]
});