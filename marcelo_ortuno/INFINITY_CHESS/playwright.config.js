// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true, //permite ejecución en paralelos
  reporter: 'html',
  timeout: 30000,
    expect: {
        timeout: 5000
    },
  use: {
    baseURL: process.env.BASE_URL || 'https://sistema.clubinfinitychess.com/',
    headless: process.env.HEADLESS !== 'false',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
*/
  ],
});

