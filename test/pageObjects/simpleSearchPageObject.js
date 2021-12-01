const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  verifySearchBarOpening () {
    //clicks accept cookies button
      const cookies = $('#onetrust-accept-btn-handler').click()
    //finds and clicks the search bar
    const searchBar = $('[name="query"]').click()

  }

  enterSearchBarText (string) {
    //enters a value into the search modal
      const input = $("[class=_1g5dvk1]").setValue(string)
    
  }

  verifySearchResults (string) {
    //asserts results relevant to search query are shown, reusing ParentPageObject.js
    this.isElementEqualToExpected($('[class=_63p46ei]'), string)
    const brand = $('[class=_63p46ei]')
    brand.click()

  }
}

module.exports = simpleSearchPageObject
