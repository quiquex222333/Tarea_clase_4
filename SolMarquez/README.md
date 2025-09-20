# Framework Playwright Basado en Node.js

## Requerimientos 
1. Node.js
2. Visual Studio Code

## Instalación 

Ingresar en la carpeta SolMarquez, luego iniciar el proyecto utilizando la terminal de Visual Studio Code

```
npm init -y 
```

Instalar las dependecias para playwright 

```
npm init playwright@latest  
npm install fs-extra
```
Para ejecutar los test de un solo archivo utilizar el comando 

```
npx playwright test tests/login.spec.js --headed
npx playwright test tests/hipermaxi.spec.js --headed
```