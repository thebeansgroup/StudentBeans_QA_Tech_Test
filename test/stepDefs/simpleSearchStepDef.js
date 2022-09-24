const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given(/^I am on the studentbeans homepage$/, () => {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
});

When(/^I open the search bar$/, () => {
});

When(/^I enter "([^"]*)"$/, (args1) => {
});


Then(/^I should select the 4th "([^"]*)" search listing$/, (args1) => {
});






