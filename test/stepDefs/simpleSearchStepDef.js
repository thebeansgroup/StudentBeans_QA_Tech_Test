const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given(/^I am on the studentbeans homepage$/, async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
  await simpleSearchPageObject.clickAcceptCookiesButton()
});

When(/^I open the search bar$/, async () => {
  await simpleSearchPageObject.openSearchBar()
});

When(/^I enter "([^"]*)"$/, async (brand) => {
  await simpleSearchPageObject.searchByBrand(brand)
});

Then(/^I should select the 4th "([^"]*)" search listing$/, async (brand) => {
  await simpleSearchPageObject.selectFourthListing(brand)
});






