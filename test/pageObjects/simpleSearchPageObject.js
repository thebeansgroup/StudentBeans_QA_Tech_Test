const ParentPageObject = require('./parentPageObject')


class simpleSearchPageObject extends ParentPageObject {


  searchBox() {
    return $("._tf5swf");
  }

  modalSearchBox() {
    return $("._1g5dvk1");
  }

  firstResult() {
    return $('._63p46ei');
  }

  goToHomePage() {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage() {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  openSearchModal() {
    this.searchBox().click();
  }

  search(searchString) {
    this.modalSearchBox().setValue(searchString);
  }

  checkFirstResult() {
    this.isElementEqualToExpected(this.firstResult(), 'Samsung')
  }
}

module.exports = simpleSearchPageObject