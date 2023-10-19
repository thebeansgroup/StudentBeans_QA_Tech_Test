const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPageObject = require('../pageObjects/loginPageObject');

const loginPageObject = new LoginPageObject();

Given('I click the Login link', async () => {
  await loginPageObject.clickLoginLink();
});

When('I enter {string} and {string} in the login form', async (user, pass) => {
  await loginPageObject.clickCaptcha();
  await loginPageObject.enterLoginDetails(user, pass);
});

Then('I see the {string}', async (txt) => {
  await loginPageObject.verifyInputError();
});
