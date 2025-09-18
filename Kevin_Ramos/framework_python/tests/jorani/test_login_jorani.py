
import json
import pytest
from pages.jorani.jorani_login_page import LoginPage
from pages.jorani.jorani_home_page import HomePage
from utils.config import BASE_URL
from utils.helpers import screenshot_path

with open('data/jorani_users.json') as f:
    users = json.load(f)

@pytest.mark.parametrize("user_key, expected_success", [
    ("valid_user", True),
    ("invalid_user", False)
])
def test_login_variantes(page, user_key, expected_success):
    login_page = LoginPage(page)
    login_page.goto(BASE_URL)

    creds = users[user_key]
    login_page.login(creds['username'], creds['password'])

    if expected_success:
        # En demo.jorani.org redirige a /home
        page.wait_for_url("**/home")
        assert "/home" in page.url, f"Se esperaba /home, pero la URL actual es {page.url}"

        home_page = HomePage(page)
        header = home_page.get_header_text()
        assert "Leave and Overtime Management System" in header
        page.screenshot(path=screenshot_path(f"login_success_{user_key}"))

    else:
        # Error de login → aparece flashbox o alert-danger
        error = login_page.get_error_message()
        assert error != "", "Debería aparecer un mensaje de error al fallar login"

        # Guardar screenshot para debug
        page.screenshot(path=screenshot_path(f"login_error_{user_key}"))

