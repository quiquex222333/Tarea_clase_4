# Framework con Playwright y Node Js

### Preparar ambiente instalando dependencias

1. Instalar dependencias y crear archivo package.json

```
npm init -y
```

2. Crea carpeta de dependencias node_modules
 
```
npm i -D @playwright/test
```

3. Ejecutar todos los Casos de Prueba
```
npx playwright test
```

4. Ejecutar por Caso de Prueba
```
npx playwright test nombreClasePrueba
```

5. Ejecuta test cases modo palpable  en distintos navegadores
```
npx playwright test --headed    
```

## Instalar dependencias Allure : Generar Reportes de Ejecucion

1. Ir al directorio del Proyecto
```
cd playwright_nodeJs
```

2. Instalar plugin que conecta Playwright con Allure.
```
npm install --save-dev allure-playwright
```

3. Instalar utilidad CLI para generar y ver reportes.
```
npm install --save-dev allure-commandline
```

4. Ejecutar los tests cases con Playwright y generar resultados en carpeta allure-results:
```
npx playwright test --reporter=allure-playwright
```

5. Generar y abrir reporte Allure
```
allure serve allure-results
```





