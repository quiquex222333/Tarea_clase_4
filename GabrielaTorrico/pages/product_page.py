from pages.base_page import BasePage

class ProductPage(BasePage):
    def __init__(self, page):
        super().__init__(page)
        # Selector usando texto visible, más estable que href
        self.add_to_cart_btn = "a:has-text('Add to Cart')"

    def add_to_cart(self):
        self.click(self.add_to_cart_btn)


