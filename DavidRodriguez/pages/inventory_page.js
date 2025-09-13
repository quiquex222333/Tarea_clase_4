
class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.inventoryList = ".inventory_list";// Lista de productos
    this.addToCartBtn = "button[data-test='add-to-cart-sauce-labs-backpack']";// Boton para agregar al carrito
    this.cartIcon = ".shopping_cart_link";// Icono del carrito
    this.cartBadge = ".shopping_cart_badge";// Numero de productos en el carrito
  }
// Verifica si la pagina de invetario esta cargada
  async isLoaded() {
    return await this.page.isVisible(this.inventoryList);
  }
// Agrega el primer producto disponible
  async addFirstItemToCart() {
    await this.page.locator(this.addToCartBtn).first().click();
  }
// Abre el carrito
  async openCart() {
    await this.page.click(this.cartIcon);
  }
// Devuelve el numero de productos del carrito
  async itemsInCart() {
    if (await this.page.isVisible(this.cartBadge)) {// Verificamos que sea visible
      const text = await this.page.textContent(this.cartBadge);// Obtenemos el texto o numero
      return parseInt(text, 10);// Convertimos a numero entero
    }
    return 0;
  }
}

module.exports = { InventoryPage };