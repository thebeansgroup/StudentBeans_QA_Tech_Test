const { expect } = require('chai')
const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {

  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async acceptCookies () {
    const cookiesButton = await $('button=Accept All Cookies')
    await cookiesButton.click();
  }

  async openSearchBar () {
    const searchBar = await $('button=Brands, items or categories')
    await searchBar.click();
  }
   
  async searchSamsung () {
    const searchSamsung = await $('input[data-testid="search-input"]')
    await searchSamsung.setValue('Samsung')
    await $("//p[contains(text(),'Clear')]").waitForDisplayed() 
  }
  
  async selectOptionFourHmsc () {
    const resultFour = await $('.css-7ew2lb:nth-child(4)')
    await resultFour.click()
  }

  async trendingNowNav () { 
    const trendingNowLink = await $('a[data-testid="nav-category-trending-now"]')
    await trendingNowLink.click()
    await browser.pause(155)
  } 
  
}

module.exports = SimpleSearchPageObject
