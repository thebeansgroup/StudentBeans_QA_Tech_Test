const ParentPageObject = require('./parentPageObject')


class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async verifySamsung () {
    await this.isElementEqualToExpected($('._63p46ei=Samsung'), 'Samsung')
  }

   async openSearchBar () {
    const searchBar =  await $('._tf5swf')
    await searchBar.click();
  }

   async enterSamsung () {
    const inputField = await $('._1g5dvk1')
    await inputField.setValue('Samsung')
  }

   async acceptCookies() {
    const accept =  await $('button=Accept All Cookies')
    await accept.click()
  }
}

module.exports = simpleSearchPageObject
