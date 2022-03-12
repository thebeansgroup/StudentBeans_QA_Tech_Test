const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPageObject = require('../pageObjects/loginPageObject')

const loginPageObject = new LoginPageObject()

Given('I click the login button', async function() {
  await loginPageObject.clickLoginButton()
})

When('I enter the {string} and {string}', async function(email, password) {
  await loginPageObject.enterEmail(email)
  await loginPageObject.enterPassword(password)
})

Then('I should see the {string} display', async function (errorMessage) {
  await loginPageObject.verifyErrorMessage(errorMessage)
})