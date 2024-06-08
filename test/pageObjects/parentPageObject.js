const { assert } = require('chai')

class ParentPageObject {
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.equal(expectedText))
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


}

module.exports = ParentPageObject
