const { assert } = require('chai')

class ParentPageObject {
  async isElementEqualToExpected(element, expectedText) {
    const elementText = await element.getText()
    if (elementText !== expectedText) {
      throw new Error(`Expected text "${expectedText}" but found "${elementText}"`)
    }
  }
}

module.exports = ParentPageObject