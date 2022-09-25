const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPageObject = require('../pageObjects/loginPageObject')


const loginPageObject = new LoginPageObject()

When(/^I click on Login menu item$/, async () => {
    await loginPageObject.clickLoginMenuItem()
});

When(/^I login with ([^"]*) and ([^"]*)$/, async (email, password) => {
    await loginPageObject.login(email, password)
});

Then(/^I should see an error message saying ([^"]*)$/, async (message) => {
    await loginPageObject.verifyErrorMessage(message)
});
