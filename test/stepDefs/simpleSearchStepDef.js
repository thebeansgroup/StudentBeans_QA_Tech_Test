const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
  simpleSearchPageObject.clickAcceptAllCookiesButton()
})

When('I open the search bar', function (){
  simpleSearchPageObject.clickSearchButton()
})

When('I enter "Samsung"', function (){
  simpleSearchPageObject.setSamsungInFullBar()
})

Then('I should select the 4th "Samsung" search listing', function (){
  simpleSearchPageObject.getFourthOptionInSearch()
})
