import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

const errors = [];
const warnings = [];

page.on('response', response => {
  if (response.status() >= 400) {
    errors.push(`${response.status()} ${response.url()}`);
  }
});

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);
  
  if (errors.length > 0) {
    console.log('✗ Errors found:');
    errors.forEach(e => console.log('  -', e));
  } else {
    console.log('✓ No 404 errors');
  }
} catch (error) {
  console.error('Navigation error:', error.message);
} finally {
  await browser.close();
}
