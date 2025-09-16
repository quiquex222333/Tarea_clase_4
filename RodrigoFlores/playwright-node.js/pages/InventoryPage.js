export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.itemTitles = '.inventory_item_name';
    this.cartButton = '.shopping_cart_link';
    this.menuButton = '#react-burger-menu-btn';
    this.logoutLink = '#logout_sidebar_link';
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  // Devuelve la lista de nombres de los productos
  async getItemTitles() {
    return this.page.$$eval(this.itemTitles, items => items.map(i => i.textContent.trim()));
  }

  // Agrega un producto al carrito por índice
  async addItemToCart(index = 0) {
    const buttons = await this.page.$$('.btn_inventory');
    await buttons[index].click();
  }

  // Abre el carrito
  async openCart() {
    await this.page.click(this.cartButton);
  }

  // Realiza logout
  async logout() {
    await this.page.click(this.menuButton);
    await this.page.click(this.logoutLink);
  }
}
