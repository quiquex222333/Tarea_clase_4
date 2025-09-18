from playwright.sync_api import Page

class CartPage:
    def __init__(self, page: Page):
        self.page = page
        self.checkout_btn = "#checkout"
        self.continue_shopping_btn = "[data-test='continue-shopping']"
        self.remove_item_btn = "[data-test='remove-sauce-labs-backpack']"
        self.cart_list = ".cart_list"

    def is_loaded(self) -> bool:
        return self.page.locator(self.checkout_btn).is_visible()

    def go_to_checkout(self):
        self.page.locator(self.checkout_btn).click()

    def remove_first_item(self):
        self.page.locator(self.remove_item_btn).click()