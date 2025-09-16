import pytest
from pages.login_page import LoginPage
from pages.inventory_page import InventoryPage
from utils.config import BASE_URL
from utils.helpers import screenshot_path, wait_for_2, wait_for_5

@pytest.mark.regression
def test_add_to_cart_flow(page):
    login = LoginPage(page)
    inventory = InventoryPage(page)

    try:
        login.goto(BASE_URL)
        login.login("standard_user", "secret_sauce")
        assert inventory.is_loaded(), "No se cargó el inventario"

        inventory.add_first_item_to_cart()
        wait_for_2()
        assert inventory.items_in_cart() == 1, "El carrito debería tener 1 item"

        inventory.open_cart()
        wait_for_5()
        # Validación simple: url contiene 'cart'
        assert "cart" in page.url, "No abrió el carrito"
    except Exception:
        page.screenshot(path=screenshot_path("cart_flow_fail"))
        raise