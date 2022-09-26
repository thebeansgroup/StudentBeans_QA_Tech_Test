const ParentPageObject = require('./parentPageObject')

class TopTwentyOffersObject extends ParentPageObject {
    async selectTopTwentyOffers () {
        await this.clickElement('a[href="/student-discount/uk/collections/top-20-student-discounts"]')

        await browser.waitUntil(async () => (await browser.getUrl()).includes("top-20-student-discount"))

        await this.isUrlEqualToExpected(browser, "top-20-student-discounts")
    }

    async selectSixthOffer () {
        await this.clickNthElement('div[data-testid="offer-image-container"]', 5)

        await browser.waitUntil(async () => (await browser.getUrl()).includes("student-discount"))
    }

    async isDiscountButtonVisible() {
        await this.isElementVisible($('div[data-testid="issuance-button-wrapper"]'))
    }
}

module.exports = TopTwentyOffersObject;