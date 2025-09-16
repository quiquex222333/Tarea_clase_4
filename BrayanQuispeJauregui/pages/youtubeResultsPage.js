const { expect } = require('@playwright/test');

exports.YouTubeResultsPage = class YouTubeResultsPage {
  constructor(page) {
    this.page = page;
    this.videoTitles = page.locator('ytd-video-renderer #video-title');
  }

  async expectHasResults() {
    await expect(this.videoTitles.first()).toBeVisible();
  }

  async expectSomeResultMatches(...patterns) {
    const count = await this.videoTitles.count();
    if (count === 0) throw new Error("No se encontraron resultados de video");

    let found = false;
    for (let i = 0; i < Math.min(count, 20); i++) {
      const txt = await this.videoTitles.nth(i).innerText();
      if (patterns.every(p => new RegExp(p, "i").test(txt))) {
        found = true;
        break;
      }
    }
    if (!found) {
      throw new Error(`No se halló ningún resultado que contenga: ${patterns}`);
    }
  }
};
