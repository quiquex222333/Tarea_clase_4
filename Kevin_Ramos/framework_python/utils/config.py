import os

# Jorani
BASE_URL = os.getenv('BASE_URL', 'https://demo.jorani.org/session/login')

# Fleetbase
FLEETBASE_URL = os.getenv('FLEETBASE_URL', 'http://localhost:4200/auth')
FLEETBASE_USER = os.getenv('FLEETBASE_USER', '')
FLEETBASE_PASS = os.getenv('FLEETBASE_PASS', '')

HEADLESS = os.getenv('HEADLESS', 'true').lower() == 'true'