
/***
 *  Se Define las variables de entorno
 */

const BASE_URL = "https://www.saucedemo.com/";

const config = {
  use: {
    headless: true,              // Corre sin abrir el navegador
    screenshot:'only-on-failure', // Sacar screenshot en caso de falla
    trace: 'retain-on-failure'
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } }
    
  ],
  testDir: "tests", // Directorio de los tests que se van a ejecutar
  timeout:20000, // tiempo maximo de ejecucion de un test
  
};

module.exports = { config, BASE_URL };
