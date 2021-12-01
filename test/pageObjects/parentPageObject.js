const TEN_SECOND_TIMEOUT = 10000

class ParentPageObject {
  isElementTextEqualToExpected (element, expectedText) {
    browser.waitUntil(
      () => {
        const errorMessage = 'text does not equal to expected';
        return expect(element.getText(), errorMessage).to.equal(expectedText);
      },
      TEN_SECOND_TIMEOUT,
      'Text does not match expected'
    )
  };

  isElementClicked(element){
    return element.click();
  };

  isElementValueEqualToExpected(element, expectedValue){
    browser.waitUntil(
      () => {
        const errorMessage = 'actual does not equal to expected';
        element.setValue(expectedValue);
        return expect(element.getValue(), errorMessage).to.equal(expectedValue);
      },
      TEN_SECOND_TIMEOUT,
      'Value does not match expected'
    )
  };

  isElementExist(element){
    browser.waitUntil(
      () => {
          return expect(element).to.exist;
    })
  };
}
module.exports = ParentPageObject;
