import os

BASE_URL_A = os.getenv('BASE_URL', 'https://parabank.parasoft.com/parabank/index.htm')
HEADLESS = os.getenv('HEADLESS', 'true').lower() == 'true'