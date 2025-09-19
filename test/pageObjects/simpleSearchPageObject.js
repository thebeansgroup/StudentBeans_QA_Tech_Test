const ParentPageObject = require('./parentPageObject');

class SimpleSearchPageObject extends ParentPageObject {
  //Selectors
  get acceptCookiesBtn () {return $('[id="onetrust-accept-btn-handler"]')}
  get closeModal () {return $('[data-testid="browser-extension-modal-popup"] [aria-label="Close"]')}
  get trendingNow () {return $('[data-testid="nav-category-trending-now"]')}
  get searchBox () {return $('[data-testid="nav-search-desktop"]')}
  get searchResultsContainer () {return $('[data-testid="search_results_row"]')}
  get searchInput () {return $('[data-testid="search-input"]')}
  get searchResults () {return $$('[data-testid="search-result-offer"]')}
  get registrationBtn () {return $('(//a[contains(@href, "sign-up")])[1]')}

  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('/uk')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Student deals of the day'), 'Student deals of the day')
  }

  async checkUrl(queryItem) {
      const currentUrl = await browser.getUrl()    
      await expect(currentUrl).contain(queryItem)
  }

  async findItem(itemPosition, searchItem) {
    const searchResults = await $$('[data-testid="search-result-offer"]')
    let chosenItem;
  
    for (let i = 0; i < searchResults.length; i++) {    
      if (await searchResults[i].$(`//div/p[normalize-space(text())="${searchItem}"]`).isExisting() && i=== itemPosition-1) {
        chosenItem = await searchResults[i]
        break
      }  
    }
    return chosenItem
  }
}

module.exports = SimpleSearchPageObject
