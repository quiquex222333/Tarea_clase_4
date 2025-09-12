import os

BASE_URL = os.getenv('BASE_URL', 'https://demo.jorani.org/session/login')
HEADLESS = os.getenv('HEADLESS', 'true').lower() == 'true'