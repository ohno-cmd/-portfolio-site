import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 10000 });
  await page.screenshot({ path: '/tmp/portfolio-desktop-timeline.png', fullPage: false });
  
  await page.evaluate(() => window.scrollBy(0, 900 * 2.5));
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/portfolio-desktop-achievement.png', fullPage: false });
  console.log('✓ Desktop screenshots saved');
} catch (error) {
  console.error('✗ Error:', error.message);
} finally {
  await browser.close();
}
