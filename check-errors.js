const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Capture all network errors
  const networkErrors = [];
  page.on('response', response => {
    if (response.status() >= 400) {
      networkErrors.push({
        url: response.url(),
        status: response.status()
      });
    }
  });
  
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  await page.waitForTimeout(2000);
  
  console.log('✓ Network Issues:');
  networkErrors.slice(0, 10).forEach(error => {
    console.log(`  ${error.status}: ${error.url.split('/').pop()}`);
  });
  
  await browser.close();
})().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
