const { Given, When, Then } = require('@cucumber/cucumber')
const { $, browser, expect } = require('@wdio/globals')

const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
  await simpleSearchPageObject.acceptCookiesBtn.click()
  await simpleSearchPageObject.closeModal.click()
})

When('I open the search bar', async () => {
  await simpleSearchPageObject.searchBox.click()
})

When(/^I enter (\w+)$/, async (searchItem) => {
  await simpleSearchPageObject.searchResultsContainer.waitForDisplayed()
  await browser.pause(500)
  await simpleSearchPageObject.searchInput.addValue(searchItem)
  await browser.pause(2000)
})

Then(/^I should select the (\d+)(?:st|nd|rd|th) (\w+) search listing$/, async (itemPosition, searchItem) => {  

  const fourthSamsung = await simpleSearchPageObject.findItem(itemPosition, searchItem)
  const fourthSamsungText = await fourthSamsung.$('./div[2]/p[2]').getText()
  await fourthSamsung.click()

  const offerPageText = await $('[data-testid="offer-issuance-title"]').getText()
  await expect(offerPageText.trim()).toEqual(fourthSamsungText.trim())
  
})