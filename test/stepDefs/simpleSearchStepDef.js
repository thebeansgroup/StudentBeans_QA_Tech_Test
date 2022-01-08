const { Given, When, Then } = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
  simpleSearchPageObject.clickAcceptCookiesButton()
})

Given('I open the search bar', function () {
  simpleSearchPageObject.openSearchBar()
})

When('I enter {string}', function(searchText) {
  simpleSearchPageObject.enterSearchText(searchText)
})

Then('I should be shown a search listing for {string}', function(searchText) {
  simpleSearchPageObject.verifyDiscountSearchResults(searchText)
})
