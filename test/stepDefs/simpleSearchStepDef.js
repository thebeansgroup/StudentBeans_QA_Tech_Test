const { Given } = require('@cucumber/cucumber')
const { When } = require('@cucumber/cucumber')
const { Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function() {
    simpleSearchPageObject.goToHomePage()
    simpleSearchPageObject.verifyHomePage()
})

Given("I open the search bar", async function() {
    await simpleSearchPageObject.openSearchBar()
})

When('I enter {string}', async function(item) {

    await simpleSearchPageObject.searchTerm(item)
})

Then("I should select the 4th {string} search listing", async function(item) {
    await simpleSearchPageObject.selectFourthElement(item);

})