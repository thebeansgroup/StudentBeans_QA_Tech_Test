const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage() {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage() {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  get buttonAcceptCookies() {
    return $('#onetrust-accept-btn-handler');
  }

  get searchBar() {
    return $('[data-testid="home-search-bar"]');
  }

  get searchInput() {
    return $('[data-testid="search-input"]');
  }

  get fourthResult() {
    return $$('[data-testid="search-result-offer"]')[3]
  }

  async clickAcceptCookiesButton() {
    await this.buttonAcceptCookies.click();
  }

  async openSearchBar() {
    await this.searchBar.click();
  }

  async searchByBrand(brand) {
    await this.searchInput.setValue(brand);
    await browser.pause(2000)
  }

  async selectFourthListing(brand) {
    await this.fourthResult.click();
    await browser.pause(2000)
  }
}

module.exports = SimpleSearchPageObject
