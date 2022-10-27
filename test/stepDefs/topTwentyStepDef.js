const { Given } = require('@cucumber/cucumber')
const { When } = require('@cucumber/cucumber')
const { Then } = require('@cucumber/cucumber')
const TopTwentyStepDefObject = require('../pageObjects/topTwentyPageObject')

const topTwentyStepDefObject = new TopTwentyStepDefObject()


Given("I select the Top 20 offers", async function() {
    await topTwentyStepDefObject.selectTopTwentyOffers()
})

When('I open the 6th discount option', async function() {

    await topTwentyStepDefObject.select6thOffer()
})

Then("I should see the get Discount button", async function() {
    await topTwentyStepDefObject.discountButtonVisable()
})