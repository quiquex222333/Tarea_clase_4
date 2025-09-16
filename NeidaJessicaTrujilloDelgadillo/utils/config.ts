import * as dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
  username: process.env.SAUCE_USERNAME || 'standard_user',
  password: process.env.SAUCE_PASSWORD || 'secret_sauce',
  baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com'
};
