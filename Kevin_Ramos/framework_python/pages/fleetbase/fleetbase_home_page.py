from playwright.sync_api import Page

class FleetbaseHomePage:
    def __init__(self, page: Page):
        self.page = page
        self.dashboard_header = "h1.text-lg.font-bold"

    def get_header_text(self):
        return self.page.locator(self.dashboard_header).inner_text()
