import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);
  
  // Full page screenshot sections
  const sections = [
    { name: 'hero', scroll: 0 },
    { name: 'intro', scroll: 900 * 1.2 },
    { name: 'timeline', scroll: 900 * 3 },
    { name: 'achievement', scroll: 900 * 5 },
    { name: 'passions', scroll: 900 * 7 },
    { name: 'contact', scroll: 900 * 9 },
  ];

  for (const section of sections) {
    await page.evaluate((scroll) => window.scrollTo(0, scroll), section.scroll);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `/tmp/final-${section.name}.png`, fullPage: false });
    console.log(`✓ ${section.name}`);
  }
} catch (error) {
  console.error('✗ Error:', error.message);
} finally {
  await browser.close();
}
