/***
 *  Carpeta donde se guardarán los screenshots en caso de tener Bugs
 */


import path from 'path';
// Libreria de sistema de archivos
import fs from 'fs';


const SCREENSHOT_DIR = path.join(process.cwd(), 'screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

export function screenshotPath(name) {
  const timestamp = new Date().toISOString().split("T")[0]; 
  return path.join(SCREENSHOT_DIR, `${name}_${timestamp}.png`);
} 


export  function sleep (time){
  return new Promise((resolve)=> setTimeout(resolve,time));
}