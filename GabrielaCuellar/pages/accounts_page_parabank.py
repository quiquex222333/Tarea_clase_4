from playwright.sync_api import Page

class AccountsPage:
    def __init__(self, page: Page):
        self.page = page
        self.table = "table[id='accountTable']"
        self.logout_link = "text=Log Out"

    def is_loaded(self):
        return self.page.locator(self.table).is_visible()
    
    def logout(self):
        self.page.locator(self.logout_link).click()

