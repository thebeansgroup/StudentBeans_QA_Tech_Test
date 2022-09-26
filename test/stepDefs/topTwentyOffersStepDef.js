const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')
const TopTwentyOffersObject = require('../pageObjects/topTwentyOffersObject')

//reusing this object so there is no need to create another instance of .goToHomePage and verifyHomePage
const simpleSearchPageObject = new SimpleSearchPageObject()
const topTwentyOffersObject = new TopTwentyOffersObject()

Given('I am on the studentbeans homepage uk', async function () {
    await simpleSearchPageObject.goToHomePage('/uk')
    await simpleSearchPageObject.verifyHomePage()
})

Given("I select the Top 20 offers", async function () {
    await topTwentyOffersObject.selectTopTwentyOffers()
})

When("I open the 6th discount option", async function () {
    await topTwentyOffersObject.selectSixthOffer()
})

Then("I should see the Get Discount button", async function () {
    await topTwentyOffersObject.isDiscountButtonVisible()
})
