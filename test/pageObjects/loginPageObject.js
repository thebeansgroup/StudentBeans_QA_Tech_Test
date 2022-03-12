const ParentPageObject = require('./parentPageObject')

class LoginPageObject extends ParentPageObject {
  get emailField () {
    return $('#email')
  }
  
  get errorMessageText () {
    return $('.css-1n7jhhc')
  }
  
  get loginButton () {
    return $('button=Login')
  }
  
  get passwordField () {
    return $('#password')
  }
  
  async clickLoginButton() {
    await this.loginButton.click()
  }
  
  async enterEmail(email) {
    await this.emailField.setValue(email);
    await browser.keys(['Tab'])
  }
  
  async enterPassword(password) {
    await this.passwordField.setValue(password)
    await browser.keys(['Tab'])
  }
  
  async verifyErrorMessage(errorMessage) {
    await this.isElementContainingText(this.errorMessageText, errorMessage)
  }
}

module.exports = LoginPageObject