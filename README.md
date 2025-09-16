# Proyecto de Pruebas Automatizadas con Playwright

Este proyecto contiene ejemplos de **automatización de pruebas E2E** usando [Playwright](https://playwright.dev/) con **Node.js**.  
Se incluyen casos de prueba sobre **YouTube** e **Instagram**, usando un patrón **Page Object Model (POM)** y datos externos en formato JSON.



---

##  Instalación de Dependencias

- [Node.js](https://nodejs.org/) v16 o superior
- [Git](https://git-scm.com/)

Verifica instalación:

```bash
node -v
npm -v
git --version

Clonar el repositorio:

- git clone https://github.com/quiquex222333/Tarea_clase_4/git
- cd TAREA_CLASE_4

Instalar dependencias:

npm install

Instalar navegadores de Playwright:

npx playwright install


1. Ejecutar todas las pruebas

- npx playwright test

2. Ejecutar un archivo específico

- npx playwright test tests/youtube_search.spec.js

3. Ejecutar en un navegador específico: 
- npx playwright test --project=chromium
- npx playwright test --project=firefox
- npx playwright test --project=webkit
