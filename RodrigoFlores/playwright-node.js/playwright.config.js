import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, 
  expect: {
    timeout: 5000,
  },
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium'},
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    /*{
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },*/
  ],

  outputDir: 'reports/test-results/',
});
