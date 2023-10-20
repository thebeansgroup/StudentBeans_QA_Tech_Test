const { Given, When, Then } = require('@cucumber/cucumber')
const TrendingNowPageObject = require('../pageObjects/trendingNowPageObject')
const { expect } = require('chai')
let trendingImageSelected;

const trendingNowPageObject = new TrendingNowPageObject()

Given('I am on the studentbeans homepage', async () => {
  await trendingNowPageObject.goToHomePage()
})

Given('I open the trending now page', async () => {
  await trendingNowPageObject.selectTrendingNowLink()
})

When('I select the {int}th discount on the trending now page', async (itemIndex) => {
  const trendingImageSelected = trendingNowPageObject.selectTendingNowOffer(itemIndex);
})

//To Fix: Compare the content of offer on trending page to the offer object page
Then('I should be on the 6th discount page', async () => {
  //const src = this.trendingImageSelected.$('src');
  //const selectedTrendingOffer = trendingNowPageObject.getSelectedOffer();
  //expect(src).contains(selectedTrendingOffer.$('src')).to.exist;
})
