from playwright.sync_api import Page

class InventoryPage:
    def __init__(self, page: Page):
        self.page = page
        self.inventory_list = ".inventory_list"
        self.add_to_cart_btn = "button[data-test='add-to-cart-sauce-labs-backpack']"
        self.cart_icon = ".shopping_cart_link"
        self.cart_badge = ".shopping_cart_badge"
        # self.product_title = "span[data-test='title']"

    def is_loaded(self):
        return self.page.locator(self.inventory_list).is_visible()
    
    def add_first_item_to_cart(self):
        # self.page.click(self.add_to_cart_btn)
        self.page.locator(self.add_to_cart_btn).first.click()

    def open_cart(self):
        self.page.click(self.cart_icon)

    def items_in_cart(self):
        if self.page.locator(self.cart_badge).is_visible():
            return int(self.page.locator(self.cart_badge).text_content())
        return 0