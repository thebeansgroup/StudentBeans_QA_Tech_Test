import ParentPageObject from './parentPageObject'

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('/uk')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Student deals of the day'), 'Student deals of the day')
  }
}

module.exports = SimpleSearchPageObject
