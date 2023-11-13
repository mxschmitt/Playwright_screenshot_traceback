import puppeteer from 'puppeteer';
import path from 'path';
import { pathToFileURL } from 'url';

const dirname = path.dirname(new URL(import.meta.url).pathname);

(async () => {
  const browser = await puppeteer.launch({
    dumpio: true,
    headless: false,
    // executablePath: '',
    // channel: 'chrome-canary'
  });
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

  await page.goto(pathToFileURL(path.join(dirname, 'index.html')).href);

  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  await browser.close();
})();