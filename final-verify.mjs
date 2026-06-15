import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);
  
  // Career section with profile photo
  await page.evaluate(() => window.scrollTo(0, 900 * 4.5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/final-career-with-photo.png', fullPage: false });
  console.log('✓ Career with photo');
  
  // Deep story with university photo
  await page.evaluate(() => window.scrollTo(0, 900 * 2.5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/final-university.png', fullPage: false });
  console.log('✓ University photo');
  
  // Deep story with Tatsumi photo
  await page.evaluate(() => window.scrollTo(0, 900 * 4.2));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/final-tatsumi.png', fullPage: false });
  console.log('✓ Tatsumi photo');
  
  // Passions section
  await page.evaluate(() => window.scrollTo(0, 900 * 7.5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/final-passions.png', fullPage: false });
  console.log('✓ Passions');
} catch (error) {
  console.error('✗ Error:', error.message);
} finally {
  await browser.close();
}
