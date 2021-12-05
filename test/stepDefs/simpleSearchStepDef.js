const { Given, Then, When } = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
    simpleSearchPageObject.goToHomePage()
    simpleSearchPageObject.verifyHomePage()
    simpleSearchPageObject.acceptCookies()
})

Given('I open the search bar', function () {
    
})

When('I enter "Samsung"', function () {

})

Then('I should be shown a search listing for "Samsung"', function () {

})