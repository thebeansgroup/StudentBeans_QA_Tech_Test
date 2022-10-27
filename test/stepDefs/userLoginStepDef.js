const { Given } = require('@cucumber/cucumber')
const { When } = require('@cucumber/cucumber')
const { Then } = require('@cucumber/cucumber')
const { Browser } = require('selenium-webdriver')
const UserLoginStepDefObject = require('../pageObjects/userLoginPageObject')

const userLoginPageObject = new UserLoginStepDefObject()


Given("I select the login option", async function() {
    await userLoginPageObject.selectLogin()
})
Given("I enter my username as {string}", async function(username) {
    await userLoginPageObject.enterEmail(username)
})

Given("I enter my password as {string}", async function(password) {
    await userLoginPageObject.enterPassword(password)
})

When('I enter these credentials', async function() {

    await userLoginPageObject.clickNotRobot()
    await browser.pause(1000)
    await userLoginPageObject.clickLogin()
})

Then("I should see the error message", async function() {
    await userLoginPageObject.incorrectDetails()
})