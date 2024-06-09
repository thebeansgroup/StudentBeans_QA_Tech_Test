const { Given,When,Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
})

When(`I open {string}`,async(elementName) =>{
  await simpleSearchPageObject.clickElement(elementName)
  browser.pause(5000)
  await simpleSearchPageObject.waitsecond(1000);
})

When(`I click {string} on Simple Search Page`, async (elementName) =>{
  await simpleSearchPageObject.clickElement(elementName);
});

When(`I set {string} with {string} on Simple Search Page`, async (elementName,textValue) =>{
  await browser.pause(5000)
  await simpleSearchPageObject.setElementValue(elementName,textValue);
});

When(`I wait`, async () =>{
  await simpleSearchPageObject.waitsecond(10)
});

Then(`I should select {string} search listing`, async (elementName) =>{
  await simpleSearchPageObject.clickElement(elementName);

});

Then(`I verify {string} includes {string}`, async (elementName,text) =>{
   await simpleSearchPageObject.checkIfInclude(elementName,text);

   });

   When(`I click on {string} offers link`, async  (elementName) =>{
    await simpleSearchPageObject.clickElement(elementName);
  });

  
  Then(`I am able to see Trending Now offers with {string} Url`, async (expectedUrl)=> {
    await simpleSearchPageObject.assertCurrentUrl(expectedUrl);
  });
  
  Then(`I am able to open {string} of {string} within the Trending Now offers list`, async (elementName,indexNumber)=> {
  await simpleSearchPageObject.clickElementAndWaitForNewPage(elementName,indexNumber);
    
  });


