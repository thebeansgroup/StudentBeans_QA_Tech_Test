const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async openSearchBar() {
    this.acceptCookie();
    const searchBar = $("[data-testid='home-search-bar']");
    await searchBar.click();
  }

  async inputSearchTerm(searchTerm) {
    const searchBarInput = $("[data-testid='search-input']");
    await searchBarInput.setValue(searchTerm);
  }

  async selectSearchResult(listingIndex, searchTerm) {
    const searchListing = $$("[data-testid='search-result-offer']");
    const selectedListing = searchListing[listingIndex - 1];
    const logoAlt = await selectedListing.$("[alt='${searchTerm}']");

    if(logoAlt != null)
    {
      selectedListing.click();
      return selectedListing;
    }else{
      throw new console.error('No result found for ${searchTerm} at index ${listingIndex}');
    }

  }
}

module.exports = SimpleSearchPageObject
