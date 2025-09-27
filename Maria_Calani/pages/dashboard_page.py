from pages.base_page import BasePage

class DashboardPage(BasePage):
    DASHBOARD_HEADER = "h6.oxd-text"

    def get_header(self):
        return self.page.text_content(self.DASHBOARD_HEADER)
