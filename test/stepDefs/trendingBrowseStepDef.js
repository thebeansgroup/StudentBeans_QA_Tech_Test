const { Given, When, Then } = require('@cucumber/cucumber')

const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')
const TrendingPageObject = require('../pageObjects/trendingPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()
const trendingPageObject = new TrendingPageObject()

Given('I go to the studentbeans homepage', async () => {
    await simpleSearchPageObject.goToHomePage()
    await simpleSearchPageObject.verifyHomePage()
    await simpleSearchPageObject.acceptCookiesBtn.click()
    await simpleSearchPageObject.closeModal.click()
})

When('I click the Trending Now link', async () => {
    await simpleSearchPageObject.trendingNow.click()
})

Then('I am navigated to the Trending Discounts page', async () => {
    await simpleSearchPageObject.checkUrl('trending-discounts')
})

Then(/^I should select the (\d+)(?:st|nd|rd|th) discount offer in the trending section$/, async (position) => {
    const {trendingOfferTitle, trendingOfferBrand} = await trendingPageObject.chooseTrendingOffer(position)
    await trendingPageObject.trendingOffers[position - 1].click()
    await trendingPageObject.checkIfOfferMatches(trendingOfferBrand,trendingOfferTitle)

})