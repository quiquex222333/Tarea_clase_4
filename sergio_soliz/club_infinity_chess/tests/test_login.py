import json
import pytest
from pages.login_page import LoginPage
from utils.config import BASE_URL
from utils.helpers import screenshot_path

with open("data/user.json") as file:
     USERS = json.load(file)

@pytest.mark.smoke
@pytest.mark.parametrize("user_key, expected_success", [
     ("valid", True),
     ("invalid_password", False),
     ("invalid", False)
])
def test_login_variates(page, user_key, expected_success):
     login = LoginPage(page)
     login.goto(BASE_URL)

     creds = USERS[user_key]
     login.login(creds["username"], creds["password"])

     if expected_success:
          assert login.is_logged_in(), f"Login falló para el usuario {user_key}"
     else:
          assert login.get_error_message() != "", f"No se mostró mensaje de error para {user_key}"