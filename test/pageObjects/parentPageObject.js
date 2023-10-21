const { assert } = require('chai')

class ParentPageObject {
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.equal(expectedText))
  }

  async acceptCookie(){
    const cookieElement = await $('button#onetrust-accept-btn-handler');
    if (cookieElement !=null){
      cookieElement.click();
    }
  }
}

module.exports = ParentPageObject
