import json
import pytest
from utils.config import BASE_URL_B 
from pages.bookstore_page_demoqa import BooksPage
from utils.helpers import wait_2_secs

with open("data/books_demoqa.json") as file:
    BOOKS = json.load(file)

@pytest.mark.parametrize("book_key", ["valid", "invalid"])
def test_search_books(page, book_key):
    books_page = BooksPage(page)
    books_page.goto(BASE_URL_B)
    
    query = BOOKS[book_key]["search"]
    books_page.search(query)
    wait_2_secs()
    
    titles = books_page.get_book_titles()

    if book_key == "valid":
        assert query in titles, "No se encontró el libro válido"
    else:
        assert query not in titles, "Se encontró un libro que no debería existir"
