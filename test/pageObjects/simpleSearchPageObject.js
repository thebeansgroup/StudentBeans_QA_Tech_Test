const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
    async goToHomePage() {
        // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
        await browser.url('')
    }

    async verifyHomePage() {
        await this.acceptCookies()
        await this.isElementEqualToExpected($('//*[@id="__next"]/div/main/div/div[1]/div/div/div/div[2]/h2'), 'Making student life a little sweeter and a lot cheaper')
    }

    async openSearchBar() {
        await this.clickElement('//*[@id="__next"]/div/main/div/div[1]/div/div/button')
    }
    async searchTerm(item) {
        await this.searchElement('//html/body/div[5]/div/div/div/div[1]/div/input', item)
            //give time for results to show
        await browser.pause(1000)
    }

    async selectFourthElement(item) {
        await this.selectNthElement('a[data-testid="search-result-offer"]', 3)
            //give time for selected element to load
        await browser.pause(1000)
        await this.isElementVisible($('//*[@id="__next"]/div/main/div/div[2]/div/h3/a'))



    }

}

module.exports = SimpleSearchPageObject