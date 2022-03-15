const ParentPageObject = require('./parentPageObject')

class QuickTop20PageObject extends ParentPageObject {
  async goToHomePage() {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage() {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async verifyCookieSettings() {
    await this.isElementEqualToExpected($('#onetrust-pc-btn-handler'), 'Cookies Settings')
  }

  get buttonAcceptAllCookies() {
    return $('#onetrust-accept-btn-handler')
  }



  
  
}


module.exports = QuickTop20PageObject
