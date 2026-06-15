import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);
  
  // Sections
  const sections = [
    { name: 'hero', scroll: 0 },
    { name: 'intro', scroll: 900 * 1.2 },
    { name: 'career', scroll: 900 * 2.5 },
    { name: 'deep-story', scroll: 900 * 4 },
  ];

  for (const section of sections) {
    await page.evaluate((scroll) => window.scrollTo(0, scroll), section.scroll);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `/tmp/updated-${section.name}.png`, fullPage: false });
    console.log(`✓ ${section.name}`);
  }
} catch (error) {
  console.error('✗ Error:', error.message);
} finally {
  await browser.close();
}
