import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 667 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 10000 });
  await page.screenshot({ path: '/tmp/portfolio-mobile-hero.png', fullPage: false });
  console.log('✓ Mobile Hero screenshot saved');
  
  await page.evaluate(() => window.scrollBy(0, 667 * 1.5));
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/portfolio-mobile-intro.png', fullPage: false });
  console.log('✓ Mobile Intro screenshot saved');
  
  await page.evaluate(() => window.scrollBy(0, 667 * 2));
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/portfolio-mobile-timeline.png', fullPage: false });
  console.log('✓ Mobile Timeline screenshot saved');
} catch (error) {
  console.error('✗ Error:', error.message);
} finally {
  await browser.close();
}
