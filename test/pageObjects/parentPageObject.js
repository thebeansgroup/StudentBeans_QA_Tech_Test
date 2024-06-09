const { assert, expect } = require('chai')

class ParentPageObject {
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(expect(await element.getText(), errorMessage).to.equal(expectedText))
  }

  // Method to pause the browser for a specified number of seconds
  async waitsecond(secondTime){
  browser.pause(secondTime*1000)
  }

  // Assert that the current URL matches the expected URL
  async assertCurrentUrl(expectedUrl) {
  const actualUrl = await browser.getUrl();
  expect(actualUrl).to.equal(expectedUrl);
  if (actualUrl !== expectedUrl) {
    throw new Error(`Expected URL to be "${expectedUrl}", but found "${actualUrl}"`);
 }
 }
  // Assert that the text of a web element's text matches the expected text
  async assertTextEqual(elementName,expectedText) {
  const webElement =await  $(this.getSelector(elementName));
  const actualText = (await webElement.getText()).trim();
  expect(actualText).to.equal(expectedText, `Expected text to be "${expectedText}", but found "${actualText}"`);
  
  if (actualText !== expectedText) {
    throw new Error(`Expected text to be "${expectedText}", but found "${actualText}"`);
 } 
 }

 // Wait until the specified element is loaded and exists in the DOM, with a timeout of 10 seconds
 async  waitUntilLoaded(element) {
  const WebElement = await $(element);
  await WebElement.waitForExist({ timeout: 10000 }); 
 }

 // Hover over the specified element
 async hoverOverElement(selector) {
  const WebElement = await $(selector);
  await WebElement.moveTo();
 }
 async clickElement(elementName) {
    
  const webElement = await $(this.getSelector(elementName));
  await webElement.waitForClickable({ timeout: 5000 }); // Wait until the element is clickable with a timeout of 5 seconds.
  await webElement.click();
}


 // to verify after clicking a web element with a specific index number, to see if clicked opening in new url 
 async clickElementAndWaitForNewPage(elementName, indexNumber) {
  try {
          const index= parseInt(indexNumber)-1;
          const webElements = await $$(this.getSelector(elementName));

          // Check if the index is valid
      if (index >= 0 && index < webElements.length) {
           // Get the URL of the current page
          const initialUrl = await browser.getUrl();

         // Click on the element at the specified index
          await webElements[index].click();
          console.log(`Clicked the element at index ${indexNumber}.`);
          
           // Wait for the new page to load and verify
          await browser.waitUntil(async () => {
              const currentUrl = await browser.getUrl();

              console.log(currentUrl);
              // The URL of the new page should be different from the initial URL
              return currentUrl !== initialUrl; 
          }, 
          { timeout: 10000, timeoutMsg: 'New page was not loaded' });

           const successMessage = "Element clicked successfully and new page loaded.";
           console.log(successMessage);
           return successMessage;} 
        else {
           const errorMessage = "Index is out of bounds or element not found.";
           console.error(errorMessage);
           return errorMessage;
      }
  } 
  catch (error) {
      const errorMessage = "Error occurred while clicking the element: " + error.message;
      console.error(errorMessage);
      return errorMessage;
  }
}


 

}

module.exports = ParentPageObject
