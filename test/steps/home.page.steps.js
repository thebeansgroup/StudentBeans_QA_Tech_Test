const {Given, When, Then} = require('cucumber')
const HomePage = require('../pages/home.page')

Given(/^I am on the studentbeans homepage$/, async () => {
  await HomePage.open()
  await HomePage.assertOnHomePage()
  await HomePage.acceptAllCookies()
})

When(/^I open the search bar$/, async () => {
  await HomePage.openSearchInput()
})

When(/^I enter "([^"]*)"$/, async searchTerm => {
  await HomePage.searchForTerm(searchTerm)
})

Then(/^I should be shown a search listing for "([^"]*)"$/, async listing => {
  await HomePage.assertSearchResultsDisplayed()
  await HomePage.assertSearchResultsFoundForSearchTerm(listing)
})
