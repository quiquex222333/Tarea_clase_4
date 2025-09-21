# 🚀 Proyecto de Pruebas con Cypress
## 📦 Instalación

Primero instala las dependencias del proyecto:

npm install

npm install cypress --save-dev

## ▶️ Ejecutar Cypress
1. Abrir Cypress UI (modo interactivo)

   npx cypress open

2. Ejecutar en modo headless (sin abrir navegador)

   npx cypress run

## ⚡ Ejecución con Scripts (package.json)

Tienes 3 formas de correrlo usando los scripts definidos:

1. Abrir Cypress UI (modo interactivo)

   npm run cy:open

2. Correr todo en modo headless

   npm run cy:run

3. Correr con Chrome visible

   npm run cypress:headed
