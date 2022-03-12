const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')
const StudentDiscountPageObject = require('../pageObjects/studentDiscountPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()
const studentDiscountPageObject = new StudentDiscountPageObject()

Given('I am on the studentbeans homepage', async function () {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
})

Given('I open the search bar', async function () {
  await simpleSearchPageObject.openSearchBar()
})

When('I enter {string}', async function(searchValue) {
  await simpleSearchPageObject.enterValueIntoSearchBar(searchValue)
})

When('I should select the 4th {string} search listing', async function(searchValue) {
  await simpleSearchPageObject.selectSearchListing(4, searchValue)
})

Then('I should see the discount page', async function() {
  await studentDiscountPageObject.verifyDiscountPage()
})