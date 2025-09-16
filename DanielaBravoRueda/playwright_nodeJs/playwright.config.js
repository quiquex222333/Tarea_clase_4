
/**
 *  Se Definen Los Fixtures que se inicializan antes de los test cases y se limpian despues (teardown)
 * 
 */

const { defineConfig, test: base } = require('@playwright/test');

const HEADLESS = true; 

// Metodo que crea test con Fixture (scope: suite completa)
const test = base.extend({
  
  // Navegador se abre una sola vez por suite de test
  browserInstance: async ({}, use) => {
    const { chromium } = require('playwright');
    const browser = await chromium.launch({ headless: HEADLESS });
    
    await use(browser);  // pasa el recurso al test
    await browser.close(); // teardown
    
  },


  // Crea contexto mas nueva pestaña
  page: async ({ browserInstance }, use) => {
    const context = await browserInstance.newContext();
    const page = await context.newPage();
    await use(page); 
    await context.close(); // teardown del contexto
  }
});

module.exports = { test, defineConfig };
