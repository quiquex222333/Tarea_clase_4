import os

BASE_URL = os.getenv('BASE_URL', 'https://www.facebook.com/')
HEADLESS = os.getenv('HEADLESS', 'false').lower() == 'true'
