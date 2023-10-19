const { Given, When, Then } = require('@cucumber/cucumber');
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject');

const simpleSearchPageObject = new SimpleSearchPageObject();

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage();
  await simpleSearchPageObject.verifyHomePage();
});

Given('I open the search bar', async () => {
  await simpleSearchPageObject.openSearchBar();
});

When('I enter {string}', async (txt) => {
  await simpleSearchPageObject.enterTextInSearchBar(txt);
});

Then('I should select the 3rd {string} search listing', async (txt) => {
  await simpleSearchPageObject.selectThirdSearchListing(txt);
});
