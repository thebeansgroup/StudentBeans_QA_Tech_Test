const { Given, When, Then } = require('@cucumber/cucumber')
const LoginErrorPageObject = require('../pageObjects/loginErrorPageObject')

const loginErrorPageObject = new LoginErrorPageObject()

Given('I am on the studentbeans login page', function () {
  loginErrorPageObject.goToHomePage()
  loginErrorPageObject.verifyHomePage()
  loginErrorPageObject.verifyCookieSettings()
  loginErrorPageObject.clickAcceptAllCookiesButton()
  loginErrorPageObject.clickHomePageLoginButton()
})

When('I have entered invalid login credentials', function (){
  loginErrorPageObject.verifyLoginPage()
  loginErrorPageObject.setEmailAddress()
  loginErrorPageObject.setPassword() 
})

When('I select the "Log in" button', function (){
  loginErrorPageObject.clickRobotVerification()
  loginErrorPageObject.clickEmailLoginButton()
})

Then('I should observe an error message', function (){
  loginErrorPageObject.verifyLoginError()
})
