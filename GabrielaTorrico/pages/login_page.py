from pages.base_page import BasePage

class LoginPage(BasePage):

    def __init__(self, page):
        super().__init__(page)
        # Selectores exactos según inspección
        self.username_inp = "input[name='username']"
        self.password_inp = "input[name='password']"
        self.login_btn = "input[name='signon']"
        self.error_msg = "span:has-text('Invalid username or password')"


    def goto(self, base_url):
        # Ir al formulario de login
        self.page.goto(base_url + "/actions/Account.action?signonForm=")

    def login(self, username, password):
        self.fill(self.username_inp, username)
        self.fill(self.password_inp, password)
        self.click(self.login_btn)

    def get_error_message(self):
        self.page.wait_for_selector(self.error_msg, state="visible", timeout=10000)
        return self.page.inner_text(self.error_msg)