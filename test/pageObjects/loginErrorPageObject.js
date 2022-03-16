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
    return $("//button[text()='Login']")
  }

  get fieldEmailAddress() {
    return $("//input[@id='email']")
  }

  get fieldPassword() {
    return $("//input[@id='email']")
  }

  get buttonRobotVerification() {
    return $("//span[@role='checkbox']")
  }

  get buttonEmailLogin() {
    return $("//button[span='Log in']")
  }


  async clickAcceptAllCookiesButton() {
    await this.buttonAcceptAllCookies.click()
  }

  async clickHomePageLoginButton() {
    await this.buttonHomePageLogin.click()
  }

  async verifyLoginPage() {
    await this.isElementEqualToExpected($('h3=Welcome Back'), 'Welcome Back')
  }

  async setEmailAddress() {
    await this.fieldEmailAddress.setValue('test@test.com')
  }

  async setPassword() {
    await this.fieldPassword.setValue('testingStuff')
  }

  async clickRobotVerification() {
    await this.buttonRobotVerification.click()
  }

  async clickEmailLoginButton() {
    await this.buttonEmailLogin.click()
  }

  async verifyLoginError() {
    await this.isElementEqualToExpected($("//p[@class='css-1n7jhhc']"), 'The password you entered is incorrect. Please try again.')
  }

  
}


module.exports = LoginErrorPageObject
