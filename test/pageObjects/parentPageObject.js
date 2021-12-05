const { expect } = require("chai")

const TEN_SECOND_TIMEOUT = 10000

class ParentPageObject {
  isElementEqualToExpected (element, expectedText) {
    browser.waitUntil(
      () => {
        const errorMessage = 'actual does not equal expected'
        return expect(element.getText(), errorMessage).to.equal(expectedText)
      },
      TEN_SECOND_TIMEOUT,
      'Text does not match expected'
    )
  }

    isElementClicked(element) {
        return element.click()
    }

    isElementVisible(element, expectedResult) {
        return expect(element).to.exist
    }
}

module.exports = ParentPageObject
