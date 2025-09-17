# pages/base_page.py
from playwright.sync_api import Page

class BasePage:
    def __init__(self, page: Page):
        self.page = page

    def click(self, selector: str):
        self.page.wait_for_selector(selector, state="visible", timeout=5000)
        self.page.click(selector)

    def get_text(self, selector: str) -> str:
        self.page.wait_for_selector(selector, state="visible", timeout=5000)
        return self.page.text_content(selector)

    def fill(self, selector: str, text: str):
        self.page.wait_for_selector(selector, state="visible", timeout=5000)
        self.page.fill(selector, text)

    def __init__(self, page):
        self.page = page

    def fill(self, selector, text):
        self.page.wait_for_selector(selector, state="visible", timeout=15000)  # 15s
        self.page.fill(selector, text)

    def click(self, selector):
        self.page.wait_for_selector(selector, state="visible", timeout=15000)  # 15s
        self.page.click(selector)
