const { Given, When, Then } = require('@cucumber/cucumber')
const { $, browser, expect } = require('@wdio/globals')

const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')
const RegistrationPageObject = require('../pageObjects/registrationPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()
const registrationPageObject = new RegistrationPageObject()

Given('I navigate to the studentbeans homepage', async () => {
    await simpleSearchPageObject.goToHomePage()
    await simpleSearchPageObject.verifyHomePage()
    await simpleSearchPageObject.acceptCookiesBtn.click()
    await simpleSearchPageObject.closeModal.click()
})

When('I click on the "Register" button', async () => {
    await simpleSearchPageObject.registrationBtn.click()
})

Then(/^I should be on the a page with ([\w-]+) in the url$/, async (item) => {
    await simpleSearchPageObject.checkUrl(item)
})

When('I try to register with an invalid email', async () => {
    await registrationPageObject.emailInput.addValue('tobylovespizza.com')
})

Then(/^I should get an (\w+) validation error$/, async (fieldType) => {
    await registrationPageObject.dataValidationError(fieldType, 'The email is invalid.')
})

When('I try to register with an invalid password', async () => {
    await registrationPageObject.passwordInput.addValue('The')
})

Then(/^I should get an (\w+) validation error$/, async (fieldType) => {
    await registrationPageObject.dataValidationError(fieldType, 'Your password must be at least 8 characters')

})