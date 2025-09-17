from pages.home_page import HomePage
from utils.config import BASE_URL

def test_home_title(page):
    page.goto(BASE_URL)
    home = HomePage(page)
    title = home.get_title()
    assert title is not None
