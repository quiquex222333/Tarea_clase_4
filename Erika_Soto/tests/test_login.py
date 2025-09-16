import json
import pytest
import os
from pages.login_page import LoginPage
from utils.config import BASE_URL
from utils.helpers import screenshot_path

current_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(current_dir, '..', 'data', 'users.json')

with open(data_path) as file:
    USERS = json.load(file)


@pytest.mark.parametrize("user_key, expected_success", [
    ("valid", True),
    ("invalid_username", False),
    ("invalid_password", False)
])
def test_login_variates(page, user_key, expected_success):
    login_page = LoginPage(page)

    try:
        login_page.goto(f"{BASE_URL}/login")
        creds = USERS[user_key]
        login_page.login(creds["username"], creds["password"])

        if expected_success:
            assert login_page.is_login_successful(), "Login debería ser exitoso"
        else:
            assert "/login" in page.current_url or login_page.get_error_message() != "", "Debería mostrar error o mantenerse en login"

    except Exception as e:
        page.save_screenshot(screenshot_path(f"login_{user_key}_fail"))
        raise e