const { Given,When,Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
})
When(`I click {string} on Simple Search Page`,async(element) =>{
  await simpleSearchPageObject.clickElement(element)
})

When(`I set {string} with {string}`, async (element,textValue) =>{
await simpleSearchPageObject.setElementValue(element,textValue)
});

When(`I wait`, async () =>{
await simpleSearchPageObject.waitsecond(10)
});
When(`I get the text from {string}`, async (string) =>{
await simpleSearchPageObject.getTextFromElement(string);
});
