import { test } from '../../fixtures.js';
import { DashboardPageOrange } from '../../pages/dashboard_page_orange.js';

test('Funcionamiento Boton horas trabajadas', async ({ loggedInPage }) => {
  const page = loggedInPage;
  const dashboardPage = new DashboardPageOrange(page);
  await page.goto('/web/index.php/dashboard/index');
  await dashboardPage.waitForDashboard();
  await dashboardPage.verifyTimeAtWorkVisible();
  await dashboardPage.clickBotonHorasTrabajadas();
  console.log('Test de dashboard usando POM y sesión guardada ✅');
});
