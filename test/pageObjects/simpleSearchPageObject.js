const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage() {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage() {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async verifyCookieSettings() {
    await this.isElementEqualToExpected($('#onetrust-pc-btn-handler'), 'Cookies Settings')
  }

  get buttonAcceptAllCookies() {
    return $('#onetrust-accept-btn-handler')
  }

  get searchBar(){
    return $('[class="_tf5swf"]')
  }

  get fullBar(){
    return $('[class="_1g5dvk1"]')
  }

  async clickAcceptAllCookiesButton() {
    await this.buttonAcceptAllCookies.click()
    console.log("Cookies Selected")
  }

  async clickSearchButton() {
    await this.searchBar.click()
    console.log("Search Bar Selected")
  }

  async setSamsungInFullBar() {
    await this.fullBar.scrollIntoView()
    await this.fullBar.setValue('Samsung')
    console.log("Samsing in full bar")
  }
  


  
  
}


module.exports = SimpleSearchPageObject
