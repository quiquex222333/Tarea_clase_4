// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: false, 
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },

});