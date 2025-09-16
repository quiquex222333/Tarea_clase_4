import { test, expect } from '../fixtures/test-fixtures';
import { CONFIG } from '../utils/config';

test.describe('tests de la pagina de productos', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(CONFIG.username, CONFIG.password);
  });

  test('La pagina de prodcutos muestra la lista de articulos', async ({ productsPage }) => {
    const count = await productsPage.getProductsCount();
    expect(count).toBeGreaterThan(0); // hay productos
  });

  test('El usuario puede añadir producto al carrito', async ({ productsPage }) => {
    await productsPage.addFirstProductToCart();
    await productsPage.goToCart();

    const cartCount = await productsPage.getCartItemsCount();
    expect(cartCount).toBe(1); // carrito tiene 1 producto
  });
});
