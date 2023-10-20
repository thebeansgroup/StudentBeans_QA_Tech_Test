const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPageObject = require('../pageObjects/LoginPageObject')

const loginPageObject = new LoginPageObject()

Given('I am on the studentbeans homepage', async () => {
  await loginPageObject.goToHomePage()
})

Given('I go to the login page', async () => {
  await loginPageObject.openLoginPage();
})

When('I enter {string} and {string}', async (email, password) => {
  await loginPageObject.enterLoginDetails(email, password)
})

Then('I should get an error message displayed', async () => {
  await loginPageObject.verifyInvalidPasswordError();
})
