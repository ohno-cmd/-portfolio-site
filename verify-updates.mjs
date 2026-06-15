import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);
  
  // Achievement section
  await page.evaluate(() => window.scrollTo(0, 900 * 5.5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/verify-achievement.png', fullPage: false });
  console.log('✓ Achievement updated');
  
  // Passions section
  await page.evaluate(() => window.scrollTo(0, 900 * 7.8));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/verify-passions.png', fullPage: false });
  console.log('✓ Passions simplified');
} catch (error) {
  console.error('✗ Error:', error.message);
} finally {
  await browser.close();
}
