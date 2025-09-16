const { expect } = require('@playwright/test');

exports.YouTubeHomePage = class YouTubeHomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input#search, input[name="search_query"]');
  }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
    await this._acceptConsentIfNeeded();
  }

  async _acceptConsentIfNeeded() {
    const texts = [
      "Aceptar todo", "Aceptar", "Acepto", 
      "I agree", "Agree", "Accept all", "Yes, I’m in"
    ];
    for (const txt of texts) {
      const btn = this.page.getByRole('button', { name: new RegExp(txt, 'i') });
      if (await btn.count() > 0) {
        await btn.first().click();
        break;
      }
    }
  }

  async search(term) {
    await this.searchInput.click();
    await this.searchInput.fill(term);
    await this.page.keyboard.press('Enter');
    await this.page.waitForURL('**/results?**');
    await this.page.locator('ytd-video-renderer #video-title').first().waitFor();
  }
};
