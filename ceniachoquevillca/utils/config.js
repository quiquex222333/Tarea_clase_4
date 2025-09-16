module.exports = {
  BASE_URL: process.env.BASE_URL || 'https://www.saucedemo.com/',
  HEADLESS: (process.env.HEADLESS || 'true').toLowerCase() === 'true'
};

