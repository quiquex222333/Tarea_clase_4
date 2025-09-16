#  Cypress + Allure Framework

Este proyecto implementa un **framework de pruebas automatizadas** usando [Cypress] y [Allure Report]
---

##  Instalación

1. Inicializar el proyecto:
```bash
npm init -y
```

2. Instalar Cypress:
```bash
npm install cypress --save-dev
```

3. Instalar Allure plugin:
```bash
npm install -D @shelex/cypress-allure-plugin
```

4. Instalar Allure Commandline :

- **Windows (npm):**
  ```bash
  npm install -g allure-commandline --save-dev
  ```
- **Windows (scoop):**
  ```bash
  scoop install allure
  ```


---

## 📂 Estructura del proyecto

```
cypress/
│── e2e/            # Casos de prueba (tests)
│── fixtures/       # Datos estáticos (ej. usuarios)
│── pages/          # Page Objects
│── screenshots/    # Capturas automáticas de Cypress
│── support/        # Comandos custom y configuración de plugins
cypress.config.js   # Configuración global de Cypress

```

---

## ⚙️ Configuración importante

- **`cypress.config.js`** → Define parámetros globales como:
  - Resolución de pantalla
  - Tiempos de espera (`defaultCommandTimeout`)
  - Variables de entorno (`env`)
  - Integración con Allure

- **`support/e2e.js`** → Se importa el plugin de Allure:
  ```js
  import '@shelex/cypress-allure-plugin';
  ```

- **`package.json`** incluye scripts útiles:
  ```json
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "allure:generate": "allure generate allure-results --clean -o allure-report",
    "allure:open": "allure open allure-report",
    "test": "npm run cypress:run && npm run allure:generate && npm run allure:open"
  }
  ```

---

##  Ejecución de pruebas

1. Abrir Cypress en modo interactivo:
```bash
npm run cypress:open
```

2. Ejecutar pruebas en modo headless:
```bash
npm run cypress:run
```

---

##  Reportes con Allure

1. Generar el reporte limpio:
```bash
npm run allure:generate
```

2. Abrir el reporte:
```bash
npm run allure:open
```

El reporte se genera en la carpeta **`allure-report/`** a partir de los resultados de **`allure-results/`**.

---

##  Requerimientos

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- Cypress ^15.x
- Allure Commandline instalado
- Navegadores soportados por Cypress (Chrome, Edge, Electron, Firefox)

---

##  Autor
**Andres Estrada**  
Framework de pruebas con Cypress + Allure 


