from utils.config import BASE_URL
from utils.helpers import screenshot_path, wait_for_5

with open("data/users.json") as file:
    USERS = json.load(file)

# @pytest.mark.smoke
@pytest.mark.parametrize("user_key, expected_success", [
    ("valid", True),
    ("locked", False),
    ("invalid", False),
    ("ejemplo", True)
])
def test_login_variates(page, user_key, expected_success):
    login = LoginPage(page)
    inventory = InventoryPage(page)
    
    try:
        login.goto(BASE_URL)
        creds = USERS[user_key]
        login.login(creds["username"], creds["password"])

        if expected_success:
            assert inventory.is_loaded(), "No se cargó la lista de productos"
        else:
            assert not inventory.is_loaded(), "No debería loguear"
            assert login.error_message() != "", "Se esperaba mensaje de error"
    except Exception:
        page.screenshot(path=screenshot_path(f"login_{user_key}_fail"))
        raise