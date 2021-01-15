const { chromium } = require('playwright');

test('All test', () => {
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click //div[normalize-space(.)='All Users']
  await page.click('//div[normalize-space(.)=\'All Users\']');
  // assert.equal(page.url(), 'http://localhost:3000/');

  // Click //div[normalize-space(.)='Male Users']
  await page.click('//div[normalize-space(.)=\'Male Users\']');
  // assert.equal(page.url(), 'http://localhost:3000/male-users');

  // Click //div[normalize-space(.)='Female Users']
  await page.click('//div[normalize-space(.)=\'Female Users\']');
  // assert.equal(page.url(), 'http://localhost:3000/female-users');

  // Click //div[normalize-space(.)='All Users']
  await page.click('//div[normalize-space(.)=\'All Users\']');
  // assert.equal(page.url(), 'http://localhost:3000/');

  // Click //div[starts-with(normalize-space(.), 'FranceSpainFranceUnited StatesCanadaUnited StatesCanadaUnited KingdomSwitzerland')]/div[1]/div/input[normalize-space(@placeholder)='Find a user' and normalize-space(@type)='text']
  await page.click('//div[starts-with(normalize-space(.), \'FranceSpainFranceUnited StatesCanadaUnited StatesCanadaUnited KingdomSwitzerland\')]/div[1]/div/input[normalize-space(@placeholder)=\'Find a user\' and normalize-space(@type)=\'text\']');

  // Fill //div[starts-with(normalize-space(.), 'FranceSpainFranceUnited StatesCanadaUnited StatesCanadaUnited KingdomSwitzerland')]/div[1]/div/input[normalize-space(@placeholder)='Find a user' and normalize-space(@type)='text']
  await page.fill('//div[starts-with(normalize-space(.), \'FranceSpainFranceUnited StatesCanadaUnited StatesCanadaUnited KingdomSwitzerland\')]/div[1]/div/input[normalize-space(@placeholder)=\'Find a user\' and normalize-space(@type)=\'text\']', '');

  // Select Canada
  await page.selectOption('//select', 'Canada');

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click //li[normalize-space(.)='⟩']
  await page.click('//li[normalize-space(.)=\'⟩\']');

  // Click //li[normalize-space(.)='⟩']
  await page.click('//li[normalize-space(.)=\'⟩\']');

  // Click a[aria-label="Go to next page"]
  await page.click('a[aria-label="Go to next page"]');

  // Click a[aria-label="Go to next page"]
  await page.click('a[aria-label="Go to next page"]');

  // Click a[aria-label="Go to next page"]
  await page.click('a[aria-label="Go to next page"]');

  // Click a[aria-label="Go to next page"]
  await page.click('a[aria-label="Go to next page"]');

  // Click g path:nth-child(2)
  await page.click('g path:nth-child(2)');

  // Click text="RESULTS"
  await page.click('text="RESULTS"');

  // Click //div[normalize-space(.)='ysmn.aalyzdh@example.com0922-107-3602']/div[3]/*[local-name()="svg"]
  await page.click('//div[normalize-space(.)=\'ysmn.aalyzdh@example.com0922-107-3602\']/div[3]/*[local-name()="svg"]');

  // Click //div[normalize-space(.)='RESULTS']
  await page.click('//div[normalize-space(.)=\'RESULTS\']');

  // Click input[placeholder="Find a user"]
  await page.click('input[placeholder="Find a user"]');

  // Fill input[placeholder="Find a user"]
  await page.fill('input[placeholder="Find a user"]', 'Hello');

  // Press Enter
  await page.press('input[placeholder="Find a user"]', 'Enter');

  // Fill input[placeholder="Find a user"]
  await page.fill('input[placeholder="Find a user"]', '');

  // ---------------------
  await context.close();
  await browser.close();
})();
  });
