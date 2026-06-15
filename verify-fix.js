const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Capture console errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  await page.waitForTimeout(2000);
  
  const checks = await page.evaluate(() => {
    const bodyText = document.body.innerText;
    return {
      hasHeroText: bodyText.includes('Create Movement'),
      hasSubtitle: bodyText.includes('あなたの野望を聞かせてください'),
      hasVideo: !!document.querySelector('video'),
      hasHeader: !!document.querySelector('header'),
    };
  });
  
  console.log('✓ Hydration Fix Check:');
  console.log(`  - Hero text visible: ${checks.hasHeroText ? '✓' : '✗'}`);
  console.log(`  - Subtitle visible: ${checks.hasSubtitle ? '✓' : '✗'}`);
  console.log(`  - Video loaded: ${checks.hasVideo ? '✓' : '✗'}`);
  console.log(`  - Header present: ${checks.hasHeader ? '✓' : '✗'}`);
  console.log(`  - Hydration errors: ${errors.length === 0 ? '✓ No errors' : '✗ ' + errors.length + ' error(s)'}`);
  
  if (errors.length > 0) {
    console.log('\nErrors detected:');
    errors.forEach(e => console.log(`  - ${e.substring(0, 100)}`));
  }
  
  await browser.close();
})().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
