const { assert } = require('chai')

class ParentPageObject {
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.equal(expectedText))
  }
  
  async waitForElementToBeDisplayed (element, expectedText) {
    await browser.waitUntil(async () => (await element.getText() === expectedText),
    {
      timeout: 5000
    })
  }
}

module.exports = ParentPageObject
