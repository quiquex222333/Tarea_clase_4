import json
import pytest
from pages.login_page_parabank import LoginPage
from pages.accounts_page_parabank import AccountsPage
from utils.config import BASE_URL_A
from utils.helpers import wait_2_secs

with open("data/credencials_parabank.json") as file:
    USERS = json.load(file)

@pytest.mark.parametrize("user_key, expected_success", [
    ("valid", True),
    ("empty", False)
])
def test_login_variates(page, user_key, expected_success):
    login = LoginPage(page)
    accounts = AccountsPage(page)
    
    
    login.goto(BASE_URL_A)
    creds = USERS[user_key]
    login.login(creds["username"], creds["password"])

    if expected_success:
        wait_2_secs()
        assert accounts.is_loaded(), "No se cargó la pagina de parabank"
    
    else:
        wait_2_secs()
        assert not accounts.is_loaded(), "No debería loguear"
        assert login.error_message() != "", "Se esperaba mensaje de error"
    