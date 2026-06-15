import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);
  
  // Achievement section with full view
  await page.evaluate(() => window.scrollTo(0, 900 * 5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/final-achievement-section.png', fullPage: false });
  console.log('✓ Achievement');
  
  // Passions with text only
  await page.evaluate(() => window.scrollTo(0, 900 * 8));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/final-passions-section.png', fullPage: false });
  console.log('✓ Passions');
} catch (error) {
  console.error('✗ Error:', error.message);
} finally {
  await browser.close();
}
