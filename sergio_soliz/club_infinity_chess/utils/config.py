import os

BASE_URL = os.getenv('BASE_URL', 'https://sistema.clubinfinitychess.com/')
HEADLESS = os.getenv('HEADLESS', 'false').lower() == 'true'
