from playwright.sync_api import Page
from utils.helpers import wait_2_secs

class LoginPage:
    def __init__(self, page: Page):
        self.page = page
        self.user_inp = "input[name='username']"
        self.password_inp = "input[name='password']"
        self.login_btn = "input[value='Log In']"
        self.error_msg = "[class='error']"

    def goto(self, base_url: str):
        self.page.goto(base_url)

    def login(self, username, password):
        self.page.fill(self.user_inp, username)
        self.page.fill(self.password_inp, password)
        wait_2_secs()
        self.page.click(self.login_btn)

    def error_message(self):
        locator = self.page.locator(self.error_msg)
        if locator.is_visible():
            return locator.text_content()
        return ""