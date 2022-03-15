const ParentPageObject = require('./parentPageObject')

class LoginErrorPageObject extends ParentPageObject {
  async goToHomePage() {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage() {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async verifyCookieSettings() {
    await this.isElementEqualToExpected($('#onetrust-pc-btn-handler'), 'Cookies Settings')
  }

  get buttonAcceptAllCookies() {
    return $('#onetrust-accept-btn-handler')
  }

  get buttonHomePageLogin() {
    return $('#Login')
  }


  async clickAcceptAllCookiesButton() {
    await this.buttonAcceptAllCookies.click()
    console.log("Cookies Selected")
  }

  async clickHomePageLoginButton() {
    await this.buttonHomePageLogin.click()
    console.log("Cookies Selected")
  }


  async verifyLoginPage() {
    await this.isElementEqualToExpected($('h3=Welcome Back'), 'Welcome Back')
    
  }



  
  
}


module.exports = LoginErrorPageObject
