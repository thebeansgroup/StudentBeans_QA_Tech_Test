const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
    goToHomePage () {
        // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
        browser.url('')
    }

    verifyHomePage () {
        this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
    }

    acceptCookies() {
        const acceptCookies = $('button="Accept All Cookies"')
        acceptCookies.Click()
    }

    openSearchBar() {
        const searchBar = $('._tf5swf')
        searchBar.Click()
    }

    verifyOpenSearch() {
        this.isElementEqualToExpected = $('._1g5dvk1'), '_1g5dvk1')
    }

    typeSamsung() {
        const inputField = $('._1g5dvk1')
        inputField.setValue('Samsung')
    }


}




module.exports = simpleSearchPageObject
