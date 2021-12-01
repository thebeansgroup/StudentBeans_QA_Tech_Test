const { Given, When, Then } = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', () =>{
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
})

Given ('I open the search bar', () =>{
  simpleSearchPageObject.verifySearchBarOpening()
})

When ('I enter {string}', (string) =>{
  simpleSearchPageObject.enterSearchBarText(string)
})

Then ('I should be shown a search listing for {string}', (string)=>{
  simpleSearchPageObject.verifySearchResults(string)
  simpleSearchPageObject.selectSearchResult(string)
})