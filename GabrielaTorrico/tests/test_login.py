from pages.login_page import LoginPage
from utils.config import BASE_URL, DEFAULT_USER

def test_login_success(page):
    login_page = LoginPage(page)
    login_page.goto(BASE_URL)
    login_page.login(DEFAULT_USER["username"], DEFAULT_USER["password"])

def test_login_fail(page):
    login_page = LoginPage(page)
    login_page.goto(BASE_URL)
    login_page.login("invalid", "wrong")
    error = login_page.get_error_message()
    assert "Invalid username or password" in error