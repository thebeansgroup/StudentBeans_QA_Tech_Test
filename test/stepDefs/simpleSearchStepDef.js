const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

//use given when then context from .feature files
Given('I am on the studentbeans homepage', async function () {
  await simpleSearchPageObject.goToHomePage('')
  await simpleSearchPageObject.verifyHomePage()
})

Given("I open the search bar", async function () {
  await simpleSearchPageObject.openSearchBar()
})

When("I enter {string}", async function (brand) {
  await simpleSearchPageObject.enterStringInSearchBar(brand);
})

Then("I should select the 4th {string} search listing", async function (brand) {
  await simpleSearchPageObject.selectFourthListing(brand);
})