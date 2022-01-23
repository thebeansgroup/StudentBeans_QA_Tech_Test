const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage() {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage() {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }
  clickSearchButton() {
    this.clickElement($('[name="query"]'), 5000)
  }

  searchForBrand(brandName) {
    this.typeText($('//input[@class="_1g5dvk1"]'), brandName, 5000)
  }
  
  verifySearchResults(brandName) {
    //future search for any brand
    let xpathSpan = "'" + brandName + "'" + ']';
    this.isElementEqualToExpected($('//span[text()=' + xpathSpan), brandName)
  }
}

module.exports = simpleSearchPageObject
