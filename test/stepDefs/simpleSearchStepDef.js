const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')
const { expect } = require('chai')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
})

Given('I open the search bar', async () => {
  await simpleSearchPageObject.openSearchBar()
})

When('I enter {string}', async (searchTerm) => {
  await simpleSearchPageObject.inputSearchTerm(searchTerm)
})

Then('I should select the {int}th {string} search listing', async (searchIndex, searchTerm) => {
  const selectedListing = await simpleSearchPageObject.selectSearchResult(searchIndex, searchTerm);
  expect(selectedListing).to.exist;
})
