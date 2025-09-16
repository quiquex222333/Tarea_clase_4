from playwright.sync_api import Page
from utils.helpers import wait_for_2

class LoginPage:
    def __init__(self, page: Page):
        self.page = page
        self.user_inp = "input[data-test='username']"
        self.password_inp = "input[data-test='password']"
        self.login_btn = "input[data-test='login-button']"
        self.error_msg = "[data-test='error']"

    def goto(self, base_url: str):
        self.page.goto(base_url)

    def login(self, username, password):
        self.page.fill(self.user_inp, username)
        self.page.fill(self.password_inp, password)
        wait_for_2()
        self.page.click(self.login_btn)

    def error_message(self):
        if self.error_message:
            return self.error_message.text_content()
        return ""