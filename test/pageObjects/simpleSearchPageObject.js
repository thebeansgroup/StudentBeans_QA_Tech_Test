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
    const searchBar = await driver.findElement(By.id('search-bar'));
    await searchBar.click();
  }

  async enterSearchTerm(searchTerm) {
    const searchBarInput = await driver.findElement(By.id('search-input'));
    await searchBarInput.clear();
    await searchBarInput.sendKeys(searchTerm);
  }

  async selectSearchListing(listingIndex, searchTerm) {
    const searchListings = await driver.findElements(By.className('search-listing'));
    const selectedListing = searchListings[listingIndex - 1];
    const listingTitle = await selectedListing.findElement(By.className('listing-title')).getText();

    if (listingTitle.toLowerCase() === searchTerm.toLowerCase()) {
      await selectedListing.click();
      return selectedListing;
    } else {
      throw new Error(`No matching search listing found for "${searchTerm}" at index ${listingIndex}`);
    }
  }
}


module.exports = SimpleSearchPageObject
