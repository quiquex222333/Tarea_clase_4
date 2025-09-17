from pages.product_page import ProductPage
from utils.config import BASE_URL

def test_add_product_to_cart(page):
    # Ir directo a la página del producto (ejemplo: EST-4)
    page.goto(BASE_URL + "/actions/Catalog.action?viewProduct=&productId=EST-4")
    product_page = ProductPage(page)
    product_page.add_to_cart()
    # Aquí puedes añadir asserts para verificar que el producto se agregó
