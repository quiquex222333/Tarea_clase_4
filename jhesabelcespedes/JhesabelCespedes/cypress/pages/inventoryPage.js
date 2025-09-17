class InventoryPage {
  elements = {
    inventoryContainer: () => cy.get(".inventory_list"),
    items: () => cy.get(".inventory_item") //selecciona cada tarjeta de producto
  };

  isLoaded() { //verificación de carga.
    return this.elements.inventoryContainer();
  }

  getProducts() { //acceso a la colección de productos
    return this.elements.items();
  }
}

export default new InventoryPage();
