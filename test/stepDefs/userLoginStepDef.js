const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')
const UserLoginPageObject = require('../pageObjects/userLoginObject')

const simpleSearchPageObject = new SimpleSearchPageObject()
const userLoginPageObject = new UserLoginPageObject()

Given('I am on the studentbeans homepage uk', async function () {
    await simpleSearchPageObject.goToHomePage('/uk')
    await simpleSearchPageObject.verifyHomePage()
})

Given('I select the login button', async function () {
    await userLoginPageObject.selectLogin()
})

Given("my email is {string}", async function (email) {
    await userLoginPageObject.enterEmail(email)
})

Given("my password is {string}", async function (password) {
    await userLoginPageObject.enterPassword(password)
})

When("I enter these credentials", async function () {
    await userLoginPageObject.confirmCredentials()
}) 

Then("I trigger the user and password error message", async function () {
    await userLoginPageObject.triggerErrorMessage() //if this fails too many times it asks for extra captcha
})