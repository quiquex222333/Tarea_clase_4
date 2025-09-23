from playwright.sync_api import Page
from utils.helpers import wait_2_secs

class BooksPage:
    def __init__(self, page: Page):
        self.page = page
        self.search_inp = "input[id='searchBox']"
        self.books_rows = ".rt-tr-group"  # cada fila de la tabla
        self.book_title_cell = ".rt-td:nth-child(2)"  # columna de título dentro de cada fila

    def goto(self, base_url):      
        self.page.goto(base_url)

    def search(self, query):
        self.page.fill(self.search_inp, query)
        wait_2_secs()
    
    def get_book_titles(self):
        titles = []
        rows = self.page.locator(self.books_rows).all()
        for row in rows:
            title = row.locator(self.book_title_cell).text_content()
            titles.append(title)
        return titles