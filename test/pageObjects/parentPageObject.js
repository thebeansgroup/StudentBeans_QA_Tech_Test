const TEN_SECOND_TIMEOUT = 10000

class ParentPageObject {
  isElementEqualToExpected(element, expectedText) {
    browser.waitUntil(
      () => {
        const errorMessage = 'actual does not equal expected'
        return expect(element.getText(), errorMessage).to.equal(expectedText)
      },
      TEN_SECOND_TIMEOUT,
      'Text does not match expected'
    )
  }

  acceptCookies() {
    const acceptCookiesBtn = $('#onetrust-accept-btn-handler');
    let cookiebtnExists = browser.isElementDisplayed('#onetrust-button-group-parent');
    if (cookiebtnExists) {
      acceptCookiesBtn.click();
    }

  }

  clickElement(element, time) {
    element.waitForDisplayed({ timeout: time }); //Explicit Wait
    element.click();
  }

  typeText(element, value, time) {
    element.waitForDisplayed({ timeout: time }); //Explicit Wait
    element.addValue(value);
  }
}

module.exports = ParentPageObject
