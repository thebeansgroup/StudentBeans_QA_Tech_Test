const ParentPageObject = require('./parentPageObject')

class TopTwentyPageObject extends ParentPageObject {

    async selectTopTwentyOffers() {
        await this.clickElement('//*[@id="__next"]/div/header/div/div[2]/div[1]/nav/ul/li[1]/a')
    }

    async select6thOffer() {
        await this.selectNthElement('div[data-testid="offer-image-container"]', 5)
            //give time for selected element to load
        await browser.pause(1000)
    }

    async discountButtonVisable() {
        await this.isElementVisible($('div[data-testid="issuance-button-wrapper"]'))

    }
}

module.exports = TopTwentyPageObject