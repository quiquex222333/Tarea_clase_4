# creacion y configuracion de base URL  Y PASSWORD LOGIN
import os

BASE_URL = os.getenv('BASE_URL', 'https://www.saucedemo.com/')
HEADLESS = os.getenv('HEADLESS', 'true').lower() == 'true'
#USERNAME = os.getenv('USERNAME', 'RABBIT714') #NOMBRE DE USUARIO
#PASSWORD = os.getenv('PASSWORD','12345678') 