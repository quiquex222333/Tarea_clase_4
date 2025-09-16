from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)
        # Locators
        self.username_input = (By.ID, "username")
        self.password_input = (By.ID, "password")
        self.login_button = (By.CSS_SELECTOR, "button[type='submit']")
        self.error_message = (By.CSS_SELECTOR, ".flash.error")

    def goto(self, url):
        self.driver.get(url)

    def login(self, username, password):
        self.driver.find_element(*self.username_input).send_keys(username)
        self.driver.find_element(*self.password_input).send_keys(password)
        self.driver.find_element(*self.login_button).click()

    def get_error_message(self):
        try:
            error_element = self.wait.until(
                EC.visibility_of_element_located(self.error_message)
            )
            return error_element.text
        except:
            return ""

    def is_login_successful(self):
        """Verifica si el login fue exitoso revisando la URL"""
        return "/secure" in self.driver.current_url