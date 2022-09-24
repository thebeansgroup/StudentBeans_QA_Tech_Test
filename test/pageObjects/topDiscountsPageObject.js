const ParentPageObject = require('./parentPageObject')

class topDiscountsPageObject extends ParentPageObject {
    async goToHomePage() {
        // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
        await browser.url('')
    }

    async verifyHomePage() {
        await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
    }