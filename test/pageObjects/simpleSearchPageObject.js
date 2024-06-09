const ParentPageObject = require('./parentPageObject')
const { assert, expect } = require('chai')

class SimpleSearchPageObject extends ParentPageObject {

  getSelector(elementName){
    switch(elementName){
      case "The Search Bar":return `[data-testid='nav-search-desktop']`;
      case "Search Box":return `[data-testid="search-input"]`;
      case "The 4th Samsung":return `//div[@data-testid='search_results_row']//div[@role='presentation' and contains(.,'Samsung')][4]`;
      case "Element Title":return `[data-testid='brand-name'] > h1`; 
      case "Cookies":return `[id='onetrust-accept-btn-handler']`;
      case "Register Button":return `//header[@role='banner']//li//div[contains(.,'Register')]`;
      case "Trending Now":return `[data-testid='nav-category-trending-now']`;
      case "The Discounts":return `[data-testid="grid"] article`;
      // case "The 6th Discount":return `(//div[@data-testid="offer-tile-title"])[6]/following-sibling::*[1]`;
    default:
        throw new Error(`${this.getSelector.name} element ("${elementName}") was not found...`);
     }
  }


    async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('');
    await this.clickElement("Cookies");
  }

   // Set the value for the web element
   async setElementValue(elementName,value){
    const webElement = await $(this.getSelector(elementName));
    await super.waitUntilLoaded(webElement);
    await webElement.setValue(value);
  } 

   //To verify home page with reasonable current URL
   async verifyHomePage () {
    const expectedUrl = 'https://www.studentbeans.com/uk';
    await this.assertCurrentUrl(expectedUrl);

  }
 
   //To get actual text from a web element
   async getTextFromElement(elementName){
   const text = await $(this.getSelector(elementName)).getText();
   return text;
  }
 
  
  async checkIfInclude(elementName,textPart){
  
    const webElement = await $(this.getSelector(elementName));
    const webElementText = await webElement.getText();
    expect(webElementText).to.include(textPart);
    
  }

 async checkIfTwoTextHaveCommonText(elementName1,elementName2){
   const webElementText1= this.getTextFromElement(elementName1);
   const webElementText2= this.getTextFromElement(elementName2);
   expect(webElementText1).to.include(webElementText2);

  }

}

module.exports = SimpleSearchPageObject
