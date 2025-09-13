//Para crear carpetas, verificar si existen
const fs = require('fs');
//Para crear rutas
const path = require('path');

/**
 @param {string} name - Nombre base del archivo (sin extensión)
 @returns {string} Ruta completa del archivo PNG
 */
function screenshotPath(name) {
  //Genera la ruta para guardar una captura de pantalla
  const outDir = path.join('reports', 'screenshots');
  //Crea la carpeta reports/screenshots si no existe
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  //Genera un timestamp en formato YYYYMMDDHHMMSS
  const timestamp = new Date().toISOString().replace(/[-:T]/g, '').split('.')[0];
  //Devuelve la ruta completa del archivo PNG
  return path.join(outDir, `${timestamp}_${name}.png`);
}

/**
 Espera un número fijo de milisegundos.
 @param {import('@playwright/test').Page} page - Página de Playwright
 @param {number} ms - Milisegundos a esperar
 */
async function waitFor(page, ms) {
  await page.waitForTimeout(ms * 1000);
}

module.exports = {
  screenshotPath,
  waitFor
};