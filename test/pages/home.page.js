const Page = require("./page");
const expectChai = require('chai').expect;
const {
  clickPageElement, 
  isTextShownForElement,
  isPageElementHasFocus,
  addTextToInput,
  assertFirstResultLinkContainsSearchTerm } = require("../helpers/page.helper");
const HOME_PAGE_URL = 'https://www.studentbeans.com/uk';

class HomePage extends Page {

    get searchInput() { 
      return $('input[placeholder="Start typing..."]');
    }

    get searchResultsHeading() { 
      return $('h3');
    }

    get searchResults() {
      return $$('a[href*="samsung"]')
    }

    async open() { 
      await super.open('/');
    }

    async assertOnHomePage() { 
      expectChai(await browser.getUrl()).to.include(HOME_PAGE_URL);
    }

    async acceptAllCookies() { 
      const acceptCookiesButton = await $('#onetrust-accept-btn-handler')
      acceptCookiesButton.click()
    }

    async openSearchInput() { 
      await clickPageElement(await this.searchInput, 7000)
      await isTextShownForElement(await this.searchResultsHeading, 'Recommended For You', 7000)
      await isPageElementHasFocus(await this.searchInput, 7000)
    }

    async searchForTerm(searchTerm) { 
      await addTextToInput(await this.searchInput, searchTerm, 7000)
    }

    async assertSearchResultsDisplayed() { 
      await isTextShownForElement(await this.searchResultsHeading, 'Discounts', 7000)
    }

    async assertSearchResultsFoundForSearchTerm(searchTerm) { 
      await assertFirstResultLinkContainsSearchTerm (await this.searchResults, searchTerm, 7000)
    }
}

module.exports = new HomePage