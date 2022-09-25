const { Given, When, Then } = require('@cucumber/cucumber')
const LoginPageObject = require('../pageObjects/loginPageObject')
const { assert } = require('chai')

const loginPageObject = new LoginPageObject()

When(/^I click on Login menu item$/, async () => {
    await loginPageObject.clickLoginMenuItem()
});

When(/^I login with ([^"]*) and ([^"]*)$/, async (email, password) => {
    await loginPageObject.login(email, password)
});

Then(/^I should see an error message saying ([^"]*)$/, async (message) => {
    assert(await expect(await loginPageObject.errorMessage.getText()).to.equal(message), "This is not expected behavior")
});




