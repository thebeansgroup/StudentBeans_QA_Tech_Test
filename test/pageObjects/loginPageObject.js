const ParentPageObject = require('./parentPageObject');

class LoginPageObject extends ParentPageObject {
  get loginLink() {
    return $('[data-testid="nav-login"]');
  }

  get emailInput() {
    return $('#email');
  }

  get passwordInput() {
    return $('#password');
  }

  get recaptchaCheckbox() {
    return $('.recaptcha-checkbox-border');
  }

  get loginBtns() {
    return $$('button=Log in');
  }

  async clickCaptcha() {
    await browser.switchToFrame(await $('iframe[title="reCAPTCHA"]'));
    await this.recaptchaCheckbox.click();
  }

  async enterLoginDetails(user, pass) {
    await browser.switchToFrame(null);
    await this.emailInput.setValue(user);
    await this.passwordInput.setValue(pass);

    await this.loginBtns[1].click(); // Click the 'Login' button - second button (0-based index). This is required cause there are 2 buttons on the page with 'Log in' text
    await browser.pause(5000);
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

  async verifyInputError() {
    await this.isElementEqualToExpected(
      $('[data-testid="input-alert"]'),
      'The password you entered is incorrect. Please try again.'
    );
  }
}

module.exports = LoginPageObject;
