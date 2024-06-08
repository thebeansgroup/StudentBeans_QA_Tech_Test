const { Given,When,Then } = require('@cucumber/cucumber')
const RegisterPageObject = require('../pageObjects/registerPageObject')
const ParentPageObject = require('../pageObjects/parentPageObject');
const { expect } = require('chai');

const registerPageObject = new RegisterPageObject();

When(`I set {string} with {string}`, async (elementName,textValue) =>{
    await registerPageObject.setElementValue(elementName,textValue)
    });

Then(`I assert {string} display as {string}`, async (elementName,expectedText) =>{
    await registerPageObject.assertTextEqual(elementName,expectedText);
  });
   
When(`I move on to {string} on Register Page`,async(elementName) =>{
    await registerPageObject.scrollToElement(elementName);
  })
      
      

      