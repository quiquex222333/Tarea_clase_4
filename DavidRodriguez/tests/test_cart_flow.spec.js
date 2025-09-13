// Importamos Playwright Test y expect
const { test, expect } = require('@playwright/test');

// Importamos los Page Objects
const { LoginPage } = require('../pages/login_page');
const { InventoryPage } = require('../pages/inventory_page');

// Importamos configuración y helpers
const { BASE_URL } = require('../utils/config');
const { screenshotPath, waitFor } = require('../utils/helpers');

test('Agregar un producto y abrir el carrito', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    try {
      // Ir a la página de login
      await login.goto(BASE_URL);
      // Espera para ver el cambio en pantalla
      await waitFor(page, 3);
      // Login con usuario válido
      await login.login('standard_user', 'secret_sauce');
      // Espera para ver el cambio en pantalla
      await waitFor(page, 3);
      // Verificar que el inventario esté cargado
      expect(await inventory.isLoaded()).toBeTruthy();
      // Agregar el primer producto al carrito
      await inventory.addFirstItemToCart();
      // Espera para ver el cambio en pantalla
      await waitFor(page, 3);
      // Verificar que el carrito tenga 1 ítem
      expect(await inventory.itemsInCart()).toBe(1);
      // Abrir el carrito
      await inventory.openCart();
      // Espera para ver el carrito abierto
      await waitFor(page, 3);
      // Validar que la URL contiene 'cart'
      expect(page.url()).toContain('cart');
    } catch (error) {
      // Captura de pantalla si algo falla
      await page.screenshot({ path: screenshotPath('cart_flow_fail') });
      throw error; // Re lanzar para que el test falle
    }
});
