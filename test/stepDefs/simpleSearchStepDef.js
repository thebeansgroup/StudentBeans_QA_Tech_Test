const { Given } = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
  simpleSearchPageObject.acceptCookies()
})

And(‘I open the search bar’, function()
{
  simpleSearchPageObject.clickSearchBarStartTyping();
  simpleSearchPageObject.verifySearchBarStartTyping();
})

When(‘When I enter “Samsung”, function(string)
{
 simpleSearchPageObject.enterSearchBar();
})

Then(‘Then I should be shown a search listing for “Samsung”,function(string)
{
 simpleSearchPageObject.displaySamsungList();
})

