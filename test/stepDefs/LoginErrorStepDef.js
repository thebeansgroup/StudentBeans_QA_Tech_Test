const { Given, When, Then } = require('@cucumber/cucumber')
const LoginErrorPageObject = require('../pageObjects/loginErrorPageObject')

const loginErrorPageObject = new LoginErrorPageObject()

Given('Given I am on the studentbeans login page', function () {
  loginErrorPageObject.goToHomePage()
  loginErrorPageObject.verifyHomePage()
})

When('I have entered invalid login credentials', function (){
  // simpleSearchPageObject.verifyCookieSettings()
})

When('I select the "Log in" button', function (){
})

Then('I should observe error message', function (){
})
