export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function screenshotOnFailure(page, testInfo) {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `reports/screenshots/${testInfo.title}.png` });
  }
}