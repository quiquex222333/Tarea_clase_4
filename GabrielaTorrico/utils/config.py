import os


BASE_URL = os.getenv("BASE_URL", "https://petstore.octoperf.com")


HEADLESS = os.getenv("HEADLESS", "true").lower() == "true"


BROWSER = os.getenv("BROWSER", "chrome")  
IMPLICIT_WAIT = int(os.getenv("IMPLICIT_WAIT", "5"))
EXPLICIT_WAIT = int(os.getenv("EXPLICIT_WAIT", "10"))
PAGE_LOAD_TIMEOUT = int(os.getenv("PAGE_LOAD_TIMEOUT", "30"))


DEFAULT_USER = {
    "username": os.getenv("DEFAULT_USERNAME", "j2ee"),
    "password": os.getenv("DEFAULT_PASSWORD", "j2ee"),
}

