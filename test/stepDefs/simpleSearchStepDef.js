const { Given, Then, When } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject');
const { assert } = require('chai');

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage();
  await simpleSearchPageObject.verifyHomePage()
  await simpleSearchPageObject.acceptCookies()
})

Given('I open the search bar', async () => {
  await simpleSearchPageObject.openSearchBar()
})

Given('I can navigate to the trending now page', async () => {
  await simpleSearchPageObject.trendingNowNav()
})

When('I enter "Samsung"', async () => {
  await simpleSearchPageObject.searchSamsung()
})

Then('I should select the 4th "Samsung" search listing', async () => {
  await simpleSearchPageObject.selectOptionFourHmsc()
})

