const ParentPageObject = require('./parentPageObject')

class LoginPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async openLoginPage() {
    this.acceptCookie();
    const loginLink = $("[data-testid='nav-login']");
    await loginLink.click();
  }

  async inputEmail(email) {
    const emailField = $("#email");
    await emailField.setValue(email);
  }

  async inputPassword(password) {
    const passwordField = $("#password");
    await passwordField.setValue(password);
  }

  async acceptCaptcha() {
    await browser.switchToFrame(await $('iframe[title="reCAPTCHA"]'));
    const captcha = $(".recaptcha-checkbox-border");
    await captcha.click();
  }

  async clickLoginButton() {
    const login = $$("//*[text()='Log in']");
    return login;
  }

  async enterLoginDetails(email, password) {
    await this.acceptCaptcha();
    await browser.switchToFrame(null);
    await this.inputEmail(email);
    await this.inputPassword(password);    
    await this.clickLoginButton[1].click();
  }

  async verifyInvalidPasswordError() {
    await this.isElementEqualToExpected($('[data-testid="input-alert"]'),
      'The password you entered is incorrect. Please try again.'
    );
  }     

}

module.exports = LoginPageObject