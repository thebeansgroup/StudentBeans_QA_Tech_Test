const { Given } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
})

Given('I open the search bar', async function () {
  await simpleSearchPageObject.openSearchBar();
});

When('I enter {string}', async function (searchTerm) {
  await simpleSearchPageObject.enterSearchTerm(searchTerm);
});

Then('I should select the {int}th {string} search listing', async function (listingIndex, searchTerm) {
  const selectedListing = await simpleSearchPageObject.selectSearchListing(listingIndex, searchTerm);
  expect(selectedListing).to.exist;
});
