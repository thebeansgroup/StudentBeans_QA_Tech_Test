const { Given, When, Then } = require('cucumber');

const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject');

const simpleSearchPageObject = new SimpleSearchPageObject();

Given('I am on the studentbeans homepage', function() {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
});

Given('I open the search bar', function() {
  simpleSearchPageObject.openSearchModal()
});

When('I enter {string}', function(search) {
  simpleSearchPageObject.search(search)
});

Then('I should be shown a search listing for {string}', function(search) {
  simpleSearchPageObject.checkFirstResult()
});