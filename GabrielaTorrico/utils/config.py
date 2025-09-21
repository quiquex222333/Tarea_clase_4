import os

BASE_URL = os.getenv("BASE_URL", "https://petstore.octoperf.com")
HEADLESS = os.getenv("HEADLESS", "true").lower() == "true"
DEFAULT_USER = {
    "username": os.getenv("DEFAULT_USERNAME", "j2ee"),
    "password": os.getenv("DEFAULT_PASSWORD", "j2ee")
}
