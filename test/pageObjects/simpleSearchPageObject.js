const ParentPageObject = require('./parentPageObject')


class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  verifySamsung () {
    this.isElementEqualToExpected($('._63p46ei=Samsung'), 'Samsung')
  }

  openSearchBar () {
    const searchBar = $('._tf5swf')
    searchBar.click();
    browser.pause(3000)
  }

  enterSamsung () {
    const inputField = $('._1g5dvk1')
    inputField.setValue('Samsung')
  }

  acceptCookies() {
    const accept = $('button=Accept All Cookies')
    accept.click()
  }
}

module.exports = simpleSearchPageObject
