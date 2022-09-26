const ParentPageObject = require('./parentPageObject')
class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage (url) {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url(url)
  }

  async verifyHomePage () {
    await this.clickElement('button[id="onetrust-accept-btn-handler"]') //click cookie

    await this.isElementEqualToExpected($('h2[class="css-1b21cc6"]'), "Recommended For You")
  }

  async openSearchBar () {
    await this.clickElement('button[data-testid="home-search-bar"]')
  }

  async enterStringInSearchBar (brand) {
    await this.typeInElement('[data-testid="search-input"]', brand);

    await browser.pause(2000) //add wait to ensure it shows correct listings
  }

  async selectFourthListing (brand) { 
    await this.clickNthElement('a[data-testid="search-result-offer"]', 3)

    await this.isUrlEqualToExpected(browser, brand.toLowerCase())
  }
}

module.exports = SimpleSearchPageObject
