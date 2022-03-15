const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
})

When('I open the search bar', function (){
  // simpleSearchPageObject.verifyCookieSettings()
})

When('I enter "Samsung"', function (){
  simpleSearchPageObject.clickSearchButton()
})

Then('I should select the 4th "Samsung" search listing', function (){
  simpleSearchPageObject.searchSamsung()
})
