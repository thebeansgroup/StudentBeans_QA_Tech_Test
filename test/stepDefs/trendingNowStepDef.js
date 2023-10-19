const { Given, When, Then } = require('@cucumber/cucumber');
const TrendingNowPageObject = require('../pageObjects/trendingNowPageObject');

const trendingNowPageObject = new TrendingNowPageObject();

Given('I accept cookies', async () => {
  await trendingNowPageObject.acceptCookies();
});

When('I click the {string} offers link', async (txt) => {
  await trendingNowPageObject.clickLinkByText(txt);
});

Then('I open the 6th discount', async () => {
  await trendingNowPageObject.selectSixthListing();
});
