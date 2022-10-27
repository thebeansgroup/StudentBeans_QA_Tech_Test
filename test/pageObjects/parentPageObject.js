const { assert } = require('chai')
const { expect } = require('chai')
const { elementIsVisible } = require('selenium-webdriver/lib/until')
const { default: click } = require('webdriverio/build/commands/element/click')



class ParentPageObject {

    //is element equal to expected
    async isElementEqualToExpected(element, expectedText) {
        const errorMessage = 'Actual does not match expected'
            //changed to contain as trailing whitespace on end of incorrect password message
        assert(await expect(await element.getText(), errorMessage).to.contain(expectedText))
    }


    //if cookie pop up appears click accept
    async acceptCookies() {

        if (expect(elementIsVisible('//*[@id="onetrust-accept-btn-handler"]'))); {
            this.clickElement('//*[@id="onetrust-accept-btn-handler"]')
        }
    }

    //click element
    async clickElement(element) {
        await browser.$(element).click()
    }

    //set search field to element
    async searchElement(element, searchString) {

        await browser.$(element).setValue(searchString)
    }

    //select nth element from index
    async selectNthElement(element, index) {

        await $$(element)[index].click()
    }

    // is an element viasable
    async isElementVisible(element) {
        const errMes = "Element is not visible"
        const isVisable = await element.isDisplayed()
        expect(await isVisable, errMes).to.equal(true)
    }

}

module.exports = ParentPageObject