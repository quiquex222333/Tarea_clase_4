from pages.login_page import LoginPage
from pages.dashboard_page import DashboardPage

BASE_URL = "https://opensource-demo.orangehrmlive.com/"

def test_dashboard_header(page):
    login_page = LoginPage(page)
    dashboard = DashboardPage(page)

    login_page.navigate(BASE_URL)
    login_page.login("Admin", "admin123")

    assert "Dashboard" in dashboard.get_header()
