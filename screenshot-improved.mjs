import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/improved-hero.png', fullPage: false });
  console.log('✓ Hero screenshot');
  
  await page.evaluate(() => window.scrollBy(0, 900 * 1.5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/improved-intro.png', fullPage: false });
  console.log('✓ Intro screenshot');
  
  await page.evaluate(() => window.scrollBy(0, 900 * 2));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/improved-timeline.png', fullPage: false });
  console.log('✓ Timeline screenshot');
  
  await page.evaluate(() => window.scrollBy(0, 900 * 2.5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/improved-achievement.png', fullPage: false });
  console.log('✓ Achievement screenshot');
} catch (error) {
  console.error('✗ Error:', error.message);
} finally {
  await browser.close();
}
