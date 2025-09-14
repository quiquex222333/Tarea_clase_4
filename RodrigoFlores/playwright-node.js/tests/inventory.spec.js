import { test } from '../fixtures/test-fixtures.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { Assertions } from '../utils/assertions.js';

test.describe('Inventory - SauceDemo', () => {

  test('Verifica que se cargan los productos', async ({ loginAsValidUser: page }) => {
    const inventory = new InventoryPage(page);
    await inventory.goto();
    const items = await inventory.getItemTitles();
    await Assertions.shouldHaveProducts(items);
  });

  test('Agregar un producto al carrito', async ({ loginAsValidUser: page }) => {
    const inventory = new InventoryPage(page);
    await inventory.goto();
    await inventory.addItemToCart(0);
    await inventory.openCart();
    const cartItems = await page.$$eval('.cart_item', items => items.length);
    await Assertions.shouldHaveCartItems(cartItems, 1);
  });

  test('Cerrar sesión desde inventario', async ({ loginAsValidUser: page }) => {
    const inventory = new InventoryPage(page);
    await inventory.goto();
    await inventory.logout();
    await Assertions.shouldBeLoggedOut(page);
  });

});
