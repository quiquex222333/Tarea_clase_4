const fs = require('fs');
const path = require('path');

function screenshotPath(name) {
  const outDir = path.join('reports', 'screenshots');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const timestamp = new Date().toISOString().replace(/[:.]/g, '_');
  return path.join(outDir, `${timestamp}_${name}.png`);
}

function waitFor(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
async function waitFor2() { await waitFor(2000); }
async function waitFor5() { await waitFor(5000); }
async function waitFor10() { await waitFor(10000); }

module.exports = { screenshotPath, waitFor2, waitFor5, waitFor10 };
