/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
  testDir: 'tests',                // Carpeta de tests
  timeout: 40000,                  // Timeout global por test
  expect: { timeout: 10000 },      // Timeout para expect()
  retries: 0,                      // Reintento en fallos
  reporter: [['list'], ['html']],  // Reporte en consola y HTML
  globalSetup: './utils/global-setup.js', // Configuración global
  workers:1,
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    headless: false,                // Ver el navegador en ejecución
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure', 
    trace: 'retain-on-failure',    
    video: 'retain-on-failure',    // Graba video solo si falla
    storageState: 'storageState.json',
    slowMo: 10000
  },

  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
   // { name: 'firefox', use: { browserName: 'firefox' } },
    //{ name: 'webkit', use: { browserName: 'webkit' } },
  ],

};

module.exports = config;