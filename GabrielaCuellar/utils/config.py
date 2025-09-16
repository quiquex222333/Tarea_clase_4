import os

BASE_URL_A = os.getenv('BASE_URL', 'https://parabank.parasoft.com/parabank/index.htm')
BASE_URL_B = os.getenv('BASE_URL', 'https://demoqa.com/books')
HEADLESS = os.getenv('HEADLESS', 'false').lower() == 'true'