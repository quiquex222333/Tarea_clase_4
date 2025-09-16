import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 80 * 1000,  // Timeout de cada test: 50s
  //retries: 1,          // Reintento en caso de fallo
  reporter: [['list'], ['html']], // Reporte de resultados
  use: {
    headless: false,       // Para ver el navegador mientras corre
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    //{ name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    //{ name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});