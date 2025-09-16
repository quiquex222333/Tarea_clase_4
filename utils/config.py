# creacion y configuracion de base URL  Y PASSWORD LOGIN
import os

BASE_URL = os.getenv('BASE_URL', 'htps://www.mercadolibre.com') #  direcion de URla
HEADLESS = os.getenv('HEADLESS', 'true').lower()== 'true'
#USERNAME = os.getenv('USERNAME', 'RABBIT714') #NOMBRE DE USUARIO
#PASSWORD = os.getenv('PASSWORD','12345678') 