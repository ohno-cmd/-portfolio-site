import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 10000 });
  await page.screenshot({ path: '/tmp/portfolio-hero.png', fullPage: false });
  console.log('✓ Hero screenshot saved');
  
  await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.5));
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/portfolio-intro.png', fullPage: false });
  console.log('✓ Intro section screenshot saved');
} catch (error) {
  console.error('✗ Error:', error.message);
} finally {
  await browser.close();
}
