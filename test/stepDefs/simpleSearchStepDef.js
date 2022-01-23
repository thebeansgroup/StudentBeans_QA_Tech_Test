const { Given, Then, When, } = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  //we need to check if cookies exist and then accept it
  simpleSearchPageObject.acceptCookies()
  simpleSearchPageObject.verifyHomePage()
})

When('I open the search bar', function () {
  simpleSearchPageObject.clickSearchButton();
})


When('I enter {string}', function (brandName) {
  simpleSearchPageObject.searchForBrand(brandName);

})

Then('I should be shown a search listing for {string}', function (brandName) {
  simpleSearchPageObject.verifySearchResults(brandName);
})

