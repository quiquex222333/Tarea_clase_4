const { defineConfig } = require('@playwright/test');
const { BASE_URL, HEADLESS } = require('./utils/config');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = defineConfig({
  use: {
    baseURL: BASE_URL,
    headless: HEADLESS,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    // { name: 'firefox', use: { browserName: 'firefox' } },
    // { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  testDir: 'tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
});