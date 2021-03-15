const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }
}

module.exports = simpleSearchPageObject
