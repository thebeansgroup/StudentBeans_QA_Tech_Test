const { When, Then } = require('@cucumber/cucumber')

const TrendingNowPageObject = require('../pageObjects/trendingNowPageObject')
const { assert } = require('chai');

const trendingNowPageObject = new TrendingNowPageObject()


When('I click on a trend', async () => {
  await trendingNowPageObject.verifyTrendNowPage()
  await trendingNowPageObject.selectOptionSixTrnsc()
})

Then('I should be able to access that trend', async () => {
  await trendingNowPageObject.verifyDealPageIsAccessed()
})

