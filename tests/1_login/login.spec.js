import { test } from '../../fixtures.js';
import { expect } from '@playwright/test';


test('Visualización de Dashboard con sesión guardada', async ({ loggedInPage }) => {
  const page = loggedInPage;
  await page.goto('/web/index.php/dashboard/index');
  const dashboardHeader = page.locator('h6', { hasText: 'Dashboard' });
  await expect(dashboardHeader).toBeVisible({ timeout: 30000 });
  console.log('Test de dashboard usando sesión guardada ✅');
});