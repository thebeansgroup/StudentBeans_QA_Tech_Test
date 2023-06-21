const { Given, When, Then} = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
  await simpleSearchPageObject.clickOnAcceptCookies()
})

Given('I open the search bar', async () =>{
  await simpleSearchPageObject.clickOnSearchBar()
})

When('I enter "Samsung"', async () =>{
  await simpleSearchPageObject.searchForSamsung()
})

Then('I should select the 4th "Samsung" search listing', async () =>{
  await simpleSearchPageObject.select4thOption()
})
