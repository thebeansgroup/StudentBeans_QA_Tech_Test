const TEN_SECOND_TIMEOUT = 10000

class ParentPageObject {
  isElementTextEqualToExpected (element, expectedText) {
    browser.waitUntil(
      () => {
        const errorMessage = 'actual does not equal expected'
        return expect(element.getText(), errorMessage).to.equal(expectedText)
      },
      TEN_SECOND_TIMEOUT,
      'Text does not match expected'
    )
  }

  clickButton(element) {
    element.waitForClickable({timeout: TEN_SECOND_TIMEOUT})
    element.click()
  }

  enterText(element, text) {
    element.waitForEnabled({timeout: TEN_SECOND_TIMEOUT})
    element.setValue(text)
  }

  isElementDisplayed(element) {
    element.waitForDisplayed({timeout: TEN_SECOND_TIMEOUT})
  }
}

module.exports = ParentPageObject
