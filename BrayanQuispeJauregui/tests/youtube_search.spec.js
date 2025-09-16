const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { YouTubeHomePage } = require('../pages/youtubeHomePage');
const { YouTubeResultsPage } = require('../pages/youtubeResultsPage');

const BASE_URL = "https://www.youtube.com";
const DATA = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/search_terms.json'), 'utf-8')
);

for (const query of DATA.valid_queries) {
  test(`YouTube search valid query: ${query}`, async ({ page }) => {
    const home = new YouTubeHomePage(page);
    const results = new YouTubeResultsPage(page);

    await home.goto(BASE_URL);
    await home.search(query);

    await results.expectHasResults();
    await results.expectSomeResultMatches("maluma", "4\\s*babys");

    await page.screenshot({ path: `reports/youtube_search_ok_${query}.png` });
  });
}

for (const query of DATA.negative_queries) {
  test(`YouTube search negative query: ${query}`, async ({ page }) => {
    const home = new YouTubeHomePage(page);
    const results = new YouTubeResultsPage(page);

    await home.goto(BASE_URL);
    await home.search(query);

    // esperamos que NO encuentre coincidencias
    let errorCaught = false;
    try {
      await results.expectSomeResultMatches("maluma", "4\\s*babys");
    } catch {
      errorCaught = true;
    }
    if (!errorCaught) {
      throw new Error("Se esperaba que no coincidiera ningún resultado");
    }

    await page.screenshot({ path: `reports/youtube_search_negative_${query}.png` });
  });
}
