const { assert } = require('chai')

class ParentPageObject {
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.equal(expectedText))
  }
async waitsecond(secondTime){
browser.pause(secondTime*1000)
}

  }
module.exports = ParentPageObject
