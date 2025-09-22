import os

BASE_URL = os.getenv('BASE_URL', 'https://the-internet.herokuapp.com')
HEADLESS = os.getenv('HEADLESS', 'true').lower() == 'true'