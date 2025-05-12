const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to match our mobile device size
  await page.setViewport({
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
  });
  
  // Load our HTML file from the project root
  const htmlPath = path.resolve('./app-screens.html');
  console.log('Loading HTML from:', htmlPath);
  await page.goto(`file://${htmlPath}`);
  
  // Take screenshot of the Goal Tracking screen
  const goalTrackingElement = await page.$('#goal-tracking');
  if (!goalTrackingElement) {
    console.error('Goal tracking element not found');
    await browser.close();
    return;
  }
  
  await goalTrackingElement.screenshot({
    path: path.resolve('./public/images/goal-tracking.png'),
    omitBackground: false
  });
  console.log('Goal Tracking screenshot saved');
  
  // Take screenshot of the Statistics screen
  const statisticsElement = await page.$('#statistics');
  if (!statisticsElement) {
    console.error('Statistics element not found');
    await browser.close();
    return;
  }
  
  await statisticsElement.screenshot({
    path: path.resolve('./public/images/statistics.png'),
    omitBackground: false
  });
  console.log('Statistics screenshot saved');
  
  // Take screenshot of the Rewards Store screen
  const rewardsStoreElement = await page.$('#rewards-store');
  if (!rewardsStoreElement) {
    console.error('Rewards store element not found');
    await browser.close();
    return;
  }
  
  await rewardsStoreElement.screenshot({
    path: path.resolve('./public/images/rewards-store.png'),
    omitBackground: false
  });
  console.log('Rewards Store screenshot saved');
  
  await browser.close();
  console.log('All screenshots completed');
})().catch(err => {
  console.error('Error in screenshot script:', err);
}); 