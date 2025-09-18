from playwright.sync_api import Page

class HomePage:
    def __init__(self, page: Page):
        self.page = page
        self.header = "h1"

    def get_header_text(self):
        return self.page.locator(self.header).inner_text()
