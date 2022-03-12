const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  get fullSearchBarField() { return $('input[class=_1g5dvk1]') }
  get discountPageText() { return $('h3')}
  get searchBarField() { return $('[name="query"]') }

 async enterValueIntoSearchBar(searchValue) {
   await this.fullSearchBarField.addValue(searchValue)
 }

 async goToHomePage () {
   // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
   await browser.url('')
   const currentDate = new Date()
   await browser.setCookies({name: "OptanonAlertBoxClosed", value: currentDate})
   await browser.refresh()
 }

 async openSearchBar() {
   await this.searchBarField.click()
   await this.fullSearchBarField.waitForDisplayed()
 }

 async selectSearchListing (index, searchTerm) {
   const formattedSearchTerm = searchTerm.toLowerCase()
   await $(`[href*='${formattedSearchTerm}']`).waitForDisplayed()
   await $(`[href*='${formattedSearchTerm}']:nth-of-type(${index})`).click()
 }

 async verifyHomePage () {
   await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
 }
}

module.exports = SimpleSearchPageObject