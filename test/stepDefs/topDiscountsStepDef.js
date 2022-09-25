const { Given, When, Then } = require('@cucumber/cucumber')
const TopDiscountsPageObject = require('../pageObjects/topDiscountsPageObject')

const topDiscountsPageObject = new TopDiscountsPageObject()

When(/^I click on Top 20 menu item$/, async () => {
    await topDiscountsPageObject.clickNavItem()
});

Then(/^I should select the 6th discount$/, async () => {
    await topDiscountsPageObject.clickTile()
});







