
from playwright.sync_api import Page

class LoginPage:
    def __init__(self, page: Page):
        self.page = page
        self.username_input = "#login"
        self.password_input = "#password"
        self.login_button = "#send"
        self.error_message = "#flashbox, .alert, .alert-danger"

    def goto(self, base_url: str):
        self.page.goto(base_url)

    def login(self, username: str, password: str):
        self.page.fill(self.username_input, username)
        self.page.fill(self.password_input, password)
        self.page.click(self.login_button)

    def get_error_message(self):
        try:
            locator = self.page.wait_for_selector(self.error_message, timeout=5000)
            return locator.inner_text().strip()
        except:
            return ""
