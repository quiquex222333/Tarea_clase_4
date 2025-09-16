# Primer Framework con Typescript y nodejs Playwright

## Como usar

Descargar el proyecto git 

crear un entorno virtual

```
python -m venv venv
```

moverse al entorno
```
.\venv\Scripts\Activate.ps1 *windows
```


Instalar navegadores de Playwright

```
npx playwright install
npm install dotenv


```

Configurar credenciales en .env
```
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
BASE_URL=https://www.saucedemo.com
```

npm test
```
npm run test:headed
npx playwright test
npx playwright show-report
```