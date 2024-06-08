const ParentPageObject = require('./parentPageObject')
const { assert } = require('chai')

class RegisterPageObject extends ParentPageObject{

    getSelector(elementName){
        switch(elementName){
          case "Email Address InputBox":return `#email`;
          case "Password InputBox":return `#password`;
          case "Email Error Message":return `//input[@id="email"]/..//p`;
          case "Password Error Message":return `//input[@id="password"]/..//p`;
          case "Let's go Button":return `.css-1j1xijh`;
          default:
            throw `${this.getSelector.name} element ("${element}) was not found...`
        }
      }

      async setElementValue(elementName,value){
        await $(this.getSelector(elementName)).setValue(value);
      } 
      async getTextFromElement(elementName){
        const text = await $(this.getSelector(elementName)).getText();
        return text;
      } 

        async clickElement(elementName) {
          const webElement = $(this.getSelector(elementName));
          await webElement.waitForClickable({ timeout: 5000 }); // Wait for 5 seconds
          await webElement.click();
      }

        async hoverOverElement(elementName) {
        const webElement = await $(this.getSelector(elementName));
        await webElement.moveTo();
      }

       async scrollToElement(elementName) {
        const webElement = await $(this.getSelector(elementName));
        await webElement.scrollIntoView();
       }
    
    
}
module.exports = RegisterPageObject