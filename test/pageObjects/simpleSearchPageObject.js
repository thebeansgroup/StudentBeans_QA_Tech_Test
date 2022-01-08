const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    // Verfiy that there is the heading expected on the homepage
    this.isElementTextEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  clickAcceptCookiesButton () {
    // Accept the cookies
    this.clickButton($('#onetrust-accept-btn-handler'))
  }

  openSearchBar () {
    // Click on the search
    this.clickButton($('[name="query"]'))
  }

  enterSearchText (searchText) {
    // Enter the text to search for
    this.enterText($('[class="_1g5dvk1"]'), searchText)
  }

  verifyDiscountSearchResults (searchText) {
    // Verfiy that the discounts section has loaded
    this.isElementDisplayed($('h3=Discounts'))
    // Verify that the text of the first result in the discounts section contains the search text
    this.isElementTextEqualToExpected($('//*[h3="Discounts"]/../../div/div/div[1]/div/a[1]/div[1]/span[1]'), searchText)
  }

}

module.exports = simpleSearchPageObject
