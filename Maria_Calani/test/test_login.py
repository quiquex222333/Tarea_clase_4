import pytest
from pages.login_page import LoginPage
from pages.dashboard_page import DashboardPage

BASE_URL = "https://opensource-demo.orangehrmlive.com/"

def test_login_valido(page):
    login_page = LoginPage(page)
    dashboard = DashboardPage(page)

    login_page.navigate(BASE_URL)
    login_page.login("Admin", "admin123")

    assert "Dashboard" in dashboard.get_header()

def test_login_invalido(page):
    login_page = LoginPage(page)

    login_page.navigate(BASE_URL)
    login_page.login("Admin", "wrongpass")

    assert "Invalid credentials" in login_page.get_error_message()
