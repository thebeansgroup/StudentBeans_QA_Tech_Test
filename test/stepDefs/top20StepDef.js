const { When } = require('@cucumber/cucumber')
const Top20PageObject = require('../pageObjects/top20PageObject')
const StudentDiscountPageObject = require('../pageObjects/studentDiscountPageObject')

const top20PageObject = new Top20PageObject()
const studentDiscountPageObject = new StudentDiscountPageObject()

When('I click the Top 20 offers link', async function() {
  await top20PageObject.goToTop20Page()
  await top20PageObject.waitForLoad()
})

When('I should select the 6th discount on the Top 20 offers list', async function() {
  await top20PageObject.selectTop20Listing(6)
  await studentDiscountPageObject.verifyDiscountPage()
})