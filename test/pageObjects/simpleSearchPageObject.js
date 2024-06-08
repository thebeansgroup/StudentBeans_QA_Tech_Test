const ParentPageObject = require('./parentPageObject')
const { assert } = require('chai')

class SimpleSearchPageObject extends ParentPageObject {

  getSelector(element){
    switch(element){
      case "Main Page Search Box":return `[data-testid='nav-search-desktop']`;
      case "Search Box":return `[data-testid='search-input']`;
      case "The 4th Samsung Item":return `//div[@data-testid="search_results_row"]//div[@role="presentation" and contains(.,"Samsung")][4]`;
      case "Element Title":return `[data-testid='brand-name']  h1`;
      case "Cookies":return `[id="onetrust-accept-btn-handler"]`;
      case "Sub Menu Hamburger Icon":return `[data-testid="profile-img"]`;
      case "Register Button":return `//header[@role="banner"]//li//div[contains(.,"Register")]`;
      default:
        throw `${this.getSelector.name} element ("${element}) was not found...`
    }
  }

  async goToHomePage () {
  // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('');
    this.clickElement("Cookies");
  }
 
  async clickElement(webElement) {
    
    const element = $(this.getSelector(webElement));
    await element.waitForClickable({ timeout: 5000 }); // Wait until the element is clickable with a timeout of 5 seconds.
    await element.click();
  }
 // Set the value for the web element.
  async setElementValue(element,value){
    const WebElement = await $(this.getSelector(element));
    await super.waitUntilLoaded(WebElement);
    await WebElement.setValue(value);
  } 

 //To verify home page with reasonable current URL
  async verifyHomePage () {
    const expectedUrl = 'https://www.studentbeans.com/uk';
    await this.assertCurrentUrl(expectedUrl);

  }
 
 //To get actual text from a web element
  async getTextFromElement(webElement){
  const text = await $(this.getSelector(webElement)).getText();
  
  } 
  
}

module.exports = SimpleSearchPageObject
