require('dotenv').config(); 
//  Carga las variables definidas en tu archivo .env 
//   (ej: BASE_URL=https://tuapp.com, HEADLESS=false)

const { defineConfig, devices } = require('@playwright/test'); 
//  Importa herramientas de Playwright para configurar el test runner

module.exports = {
  BASE_URL: process.env.BASE_URL || 'https://www.saucedemo.com',
  //  Busca la variable BASE_URL en .env o en el sistema
  //   Si no existe, usa por defecto "https://www.saucedemo.com/"

  HEADLESS: (process.env.HEADLESS || 'true').toLowerCase() === 'true'
  //  Busca HEADLESS en .env o en el sistema
  //   Si no existe, por defecto asume 'true'
  //   Convierte a minúscula y compara con 'true'
  //   Resultado final: true o false (boolean)
};


