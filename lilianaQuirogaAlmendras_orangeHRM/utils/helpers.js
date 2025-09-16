const path = require('path');

function screenshotPath(testInfo) {
  return path.join(__dirname, '..', 'screenshots', `${testInfo.title}.png`);
}

module.exports = { screenshotPath }; 