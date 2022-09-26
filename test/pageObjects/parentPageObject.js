const { assert } = require('chai');
const expectChai = require("chai").expect
class ParentPageObject {
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.include(expectedText)) //chaanged to include due to userLogin scenario (I believe there are extra spaces at the end of the string)
  }

  async clickElement(element) {
    await browser.$(element).click()
  }

  async typeInElement(element, input) {
    await browser.$(element).setValue(input);
  }

  async clickNthElement(element, index) {
    await $$(element)[index].click()
  }

  async isUrlEqualToExpected (browser, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await browser.getUrl(), errorMessage).to.include(expectedText))
  }

  async isElementVisible(element) {
    const errorMessage = "Element is not visible"
    const visible = await element.isDisplayed()
    expectChai(await visible, errorMessage).to.equal(true);
  }
}

module.exports = ParentPageObject
