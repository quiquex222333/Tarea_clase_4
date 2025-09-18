from playwright.sync_api import Page

class FleetbaseLoginPage:
    def __init__(self, page: Page):
        self.page = page
        self.email_input = "input[name='email']"
        self.password_input = "input[name='password']"
        self.login_button = "button[type='submit']"
        self.error_message = "[data-test-notification-container]"

    def goto(self, base_url: str):
        self.page.goto(base_url)

    def login(self, email: str, password: str):
        self.page.fill(self.email_input, email)
        self.page.fill(self.password_input, password)
        self.page.click(self.login_button)

    def get_error_message(self):
        try:
            locator = self.page.wait_for_selector(self.error_message, timeout=5000)
            return locator.inner_text().strip()
        except:
            return ""
