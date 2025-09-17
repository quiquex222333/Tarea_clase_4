from selenium.webdriver.common.by import By


class CheckboxesPage:
    def __init__(self, driver):
        self.driver = driver
        self.checkboxes = (By.CSS_SELECTOR, "input[type='checkbox']")

    def goto(self, url):
        self.driver.get(url)

    def get_all_checkboxes(self):
        return self.driver.find_elements(*self.checkboxes)

    def click_checkbox(self, index):
        checkboxes = self.get_all_checkboxes()
        if index < len(checkboxes):
            checkboxes[index].click()

    def is_checkbox_selected(self, index):
        checkboxes = self.get_all_checkboxes()
        if index < len(checkboxes):
            return checkboxes[index].is_selected()
        return False
