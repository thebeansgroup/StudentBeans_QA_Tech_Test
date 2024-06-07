const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  getSelector(element){
    switch(element){
      case "Main Page Search Box":return `[data-testid=nav-search-desktop]`;
      case "Search Box":return `[data-testid='search-input']`;
      case "The 4th Item":return `//div[@data-testid="search_results_row"]/div/div[@role="presentation"][4]`;
      case "Element Title":return `[data-testid='brand-name'] h1`;
      case "Cookies":return `[id="onetrust-accept-btn-handler"]`;
      default:
        throw `${this.getSelector.name} element ("${element}) was not found...`
    }
  }
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('');
    this.clickElement("Cookies");
  }
  async clickElement(webElement){
    await $(this.getSelector(webElement)).click();
  }

  async setElementValue(webElement,value){
    await $(this.getSelector(webElement)).setValue(value);
  } 

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Ray-Ban 25% Student Discount'), 'Ray-Ban 25% Student Discount')
  }
  async getTextFromElement(webElement){
    const text = await $(this.getSelector(webElement)).getText();
    console.log(text);
    } 
}

module.exports = SimpleSearchPageObject
