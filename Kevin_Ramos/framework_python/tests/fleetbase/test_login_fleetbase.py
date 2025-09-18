import json
import pytest
from pages.fleetbase.fleetbase_login_page import FleetbaseLoginPage
from pages.fleetbase.fleetbase_home_page import FleetbaseHomePage
from utils.config import FLEETBASE_URL
from utils.helpers import screenshot_path

with open('data/fleetbase_users.json') as f:
    users = json.load(f)

@pytest.mark.parametrize("user_key, expected_success", [
    ("valid_user", True),
    ("invalid_user", False)
])
def test_fleetbase_login(page, user_key, expected_success):
    login_page = FleetbaseLoginPage(page)
    login_page.goto(FLEETBASE_URL)

    creds = users[user_key]
    login_page.login(creds['username'], creds['password'])

    if expected_success:
        # Dashboard → espera h1 con "Default Dashboard"
        page.wait_for_selector("h1.text-lg.font-bold", timeout=5000)
        home_page = FleetbaseHomePage(page)
        header = home_page.get_header_text()
        assert "Default Dashboard" in header
        page.screenshot(path=screenshot_path(f"fleetbase_login_success_{user_key}"))
    else:
        error = login_page.get_error_message()
        assert error != "", "Debería aparecer un mensaje de error al fallar login"
        page.screenshot(path=screenshot_path(f"fleetbase_login_error_{user_key}"))
