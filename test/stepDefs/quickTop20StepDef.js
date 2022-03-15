const { Given, When, Then } = require('@cucumber/cucumber')
const QuickTop20PageObject = require('../pageObjects/quickTop20PageObject')

const quickTop20PageObject = new QuickTop20PageObject()

Given('I am on the studentbeans homepage', function () {
  quickTop20PageObject.goToHomePage()
  quickTop20PageObject.verifyHomePage()
})

When('I select the "Top 20" button', function (){
})

Then('I should select the 6th discount on the Top 20 offers list', function (){
})
