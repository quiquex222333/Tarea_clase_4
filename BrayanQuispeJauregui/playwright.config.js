// playwright.config.js
const { defineConfig } = require('@playwright/test');
const { headless, slowMo } = require('./utils/config');

module.exports = defineConfig({
  use: {
    headless: headless,
    viewport: { width: 1366, height: 768 },
    actionTimeout: 15000,
    baseURL: 'https://www.instagram.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { open: 'never' }]],
});
