const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async clickOnAcceptCookies(){
    await this.isElementEqualToExpected($('button=Accept All Cookies'), 'Accept All Cookies')
    const cookiesButton = await $('button=Accept All Cookies')
    await cookiesButton.click();
  }

  async clickOnSearchBar(){
    const searchButton = await $('button=Brands, items or categories')
    await searchButton.click();
  }

  async searchForSamsung(){
    let input = await $('input[data-testid="search-input"]')
    await input.addValue('Samsung')
  }

  async select4thOption(){
    const fourthOption = await $('span=Save up to £1500 on 2023 Neo QLED & OLED TVs')
    await fourthOption.click();
  }
}

module.exports = SimpleSearchPageObject
