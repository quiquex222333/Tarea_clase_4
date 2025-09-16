# Framework de Automatización con Playwright + TypeScript

Este proyecto es un framework de automatización de pruebas end-to-end usando Playwright y TypeScript.

## Estructura del proyecto

- `src/` — Código fuente en TypeScript
	- `pages/` — Page Objects (ej: LoginPage, InventoryPage)
	- `utils/` — Utilidades y configuración
	- `tests/` — Pruebas automatizadas
- `data/` — Datos de prueba (ej: users.json)
- `screenshots/` — Evidencias de pruebas
- `test-results/` — Resultados de ejecución

## Instalación

1. Clona el repositorio y entra al directorio del proyecto.
2. Instala las dependencias:

	 ```bash
	 npm install
	 ```

## Ejecución de pruebas

```bash
npx playwright test src/tests/
```

## Configuración

- La URL base se configura en `src/utils/config.ts`.
- Los usuarios de prueba están en `data/users.json`.

## Dependencias principales

- `playwright`
- `typescript`
- `jest`
- `dotenv`

## Notas

- No requiere Python ni dependencias de frameworks anteriores.
- Para agregar nuevas pruebas, crea archivos en `src/tests/` siguiendo el ejemplo de los existentes.

