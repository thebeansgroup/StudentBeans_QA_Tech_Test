const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('');
  };

  verifyHomePage () {
    this.isElementTextEqualToExpected($('h2=Recommended For You'), 'Recommended For You');
  };

  clickSearchBar(){
    $('#onetrust-accept-btn-handler').click();
    this.isElementClicked($('//div[contains(@class, "_3oi13r")]/div/div[2]'));
  };

  verifySearchBar(){
    this.isElementExist($('input._1g5dvk1'));
  };

  inputSerachKeyAndValidate(searchKey){
    this.isElementValueEqualToExpected($('input._1g5dvk1'), searchKey);
  };

  verifySearchResults(searchKey){
    this.isElementExist($(`//*[text()[contains(.,${searchKey})]]`));
  };
}
module.exports = simpleSearchPageObject;
