from pages.base_page import BasePage

class LoginPage(BasePage):
    USERNAME_INPUT = "input[name='username']"
    PASSWORD_INPUT = "input[name='password']"
    LOGIN_BUTTON = "button[type='submit']"
    ERROR_MESSAGE = ".oxd-alert-content-text"

    def login(self, username, password):
        self.page.fill(self.USERNAME_INPUT, username)
        self.page.fill(self.PASSWORD_INPUT, password)
        self.page.click(self.LOGIN_BUTTON)

    def get_error_message(self):
        return self.page.text_content(self.ERROR_MESSAGE)
