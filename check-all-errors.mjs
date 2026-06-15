import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

const errors = [];
const warnings = [];

page.on('response', response => {
  if (response.status() >= 400) {
    errors.push({
      status: response.status(),
      url: response.url(),
      request: response.request().resourceType(),
    });
  }
});

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  
  // Scroll through entire page
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let i = 0; i < height; i += 500) {
    await page.evaluate((scroll) => window.scrollTo(0, scroll), i);
    await page.waitForTimeout(300);
  }

  if (errors.length > 0) {
    console.log('✗ HTTP Errors found:');
    errors.forEach(e => {
      console.log(`  [${e.status}] ${e.url.substring(0, 80)}`);
    });
  } else {
    console.log('✓ No HTTP errors');
  }
} catch (error) {
  console.error('Navigation error:', error.message);
} finally {
  await browser.close();
}
