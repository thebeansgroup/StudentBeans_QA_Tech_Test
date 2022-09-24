const { assert } = require('chai')

class ParentPageObject {
  async isElementEqualToExpected(element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText()).to.equal(expectedText), errorMessage)
  }
}

module.exports = ParentPageObject
