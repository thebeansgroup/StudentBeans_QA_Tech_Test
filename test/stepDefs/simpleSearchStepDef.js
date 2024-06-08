const { Given,When,Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
})
When(`I click {string} on Simple Search Page`,async(element) =>{
  await simpleSearchPageObject.clickElement(element)
  browser.pause(5000)
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  await simpleSearchPageObject.waitsecond(1000);
})

When(`I set {string} with {string} on Simple Search Page`, async (elementName,textValue) =>{
  console.log('gellldioooooooooooooooooooooooooooooooooooo')
  await browser.pause(5000)

 await simpleSearchPageObject.setElementValue(elementName,textValue)
});

When(`I wait`, async () =>{
await simpleSearchPageObject.waitsecond(10)
});
When(`I get the text from {string}`, async (string) =>{
await simpleSearchPageObject.getTextFromElement(string);
});
