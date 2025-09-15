# TAREA\_CLASE\_4 – Pruebas Automatizadas con Cypress

Este proyecto contiene pruebas automatizadas para la aplicación **Sylius Demo**, utilizando **Cypress** como framework de testing end-to-end. Incluye login y pruebas para la creación de usuarios, verificando la correcta funcionalidad del módulo de administración.

---

## Estructura del proyecto

```
TAREA_CLASE_4/
│
├── cypress/
│   ├── downloads/           # Descargas de pruebas
│   ├── e2e/                 # Tests automatizados
│   │   ├── admin_create.cy.js
│   │   ├── login.cy.js
│   │   └── spec.cy.js
│   ├── fixtures/            # Datos de prueba
│   │   └── users.json
│   ├── pages/               # Page Objects
│   │   ├── admin_page.js
│   │   └── login_page.js
│   ├── reports/             # Reportes de pruebas
│   └── support/             # Comandos y utilidades
│       ├── commands.js
│       └── e2e.js
│
├── data/                    # Datos adicionales (si aplica)
├── node_modules/            # Dependencias de npm
├── cypress.config.js        # Configuración de Cypress
├── package.json             # Configuración del proyecto y scripts
├── package-lock.json
├── requirements.txt
├── .gitignore
└── README.md                # Documentación del proyecto
```

---

## Requisitos

* Node.js ≥ 16
* npm ≥ 8

---

## Instalación

1. Clonar el repositorio:

```bash
git clone git clone https://github.com/quiquex222333/Tarea_clase_4.git
cd TAREA_CLASE_4
```

2. Instalar Cypress y dependencias:

```bash
npm install cypress --save-dev
npm install
```

3. Abrir Cypress (interfaz gráfica):

```bash
npx cypress open
```

4. Ejecutar los tests desde la consola:

```bash
npx cypress run
```

---

## Descripción de los tests

* **Tests positivos**: creación de usuarios con datos válidos y verificación en la tabla de usuarios.
* **Tests negativos**: validación de errores al intentar crear usuarios con:

  * Username repetido
  * Email inválido
  * Datos no permitidos (formato incorrecto, caracteres no válidos)

---

## Page Objects

Se utiliza **Page Object Model (POM)** para mantener el código limpio y reutilizable:

* `cypress/pages/login_page.js` – Funciones para login de administrador.
* `cypress/pages/admin_page.js` – Funciones para navegar, crear usuarios y verificar la tabla.

---

## Ejecución de un test específico

Puedes ejecutar un test específico con:

```bash
npx cypress run --spec "cypress/e2e/admin_create.cy.js"
```

---

## Notas importantes

* Se ignoran errores de JavaScript en la demo (`Cypress.on('uncaught:exception')`).
* Los usuarios de prueba se generan dinámicamente con timestamp para evitar conflictos de duplicados.
* Para tests negativos que dejan campos vacíos, se limpian los inputs sin llamar a `.type('')` para evitar errores de Cypress.

---

## Autor

**Noelia Cantarran** – Proyecto de práctica de pruebas automatizadas con Cypress.

---
