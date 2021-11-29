const TIMEOUT = 10000;

class Page {

    constructor() {
    }

    async open(path) {
        await browser.url(path)
    }

    isPageLoaded(url) {
        browser.waitUntil(() => { 
            return expect(browser.getUrl().to.equal(url)), 
            TIMEOUT, 
            'The expected page did not load'
        });
    }
}

module.exports = Page
