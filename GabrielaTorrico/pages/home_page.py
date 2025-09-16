# pages/home_page.py
from pages.base_page import BasePage

class HomePage(BasePage):
    def __init__(self, page):
        super().__init__(page)
        self.title_selector = "div#Content h2"  # Selector correcto del título en la home

    def get_title(self):
        return self.get_text(self.title_selector)
