import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);
  
  await page.evaluate(() => window.scrollTo(0, 900 * 2.5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/new-timeline-top.png', fullPage: false });
  console.log('✓ Timeline top');
  
  await page.evaluate(() => window.scrollTo(0, 900 * 3.5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/new-timeline-mid.png', fullPage: false });
  console.log('✓ Timeline mid');
  
  await page.evaluate(() => window.scrollTo(0, 900 * 4.5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/new-timeline-bottom.png', fullPage: false });
  console.log('✓ Timeline bottom');
} catch (error) {
  console.error('✗ Error:', error.message);
} finally {
  await browser.close();
}
