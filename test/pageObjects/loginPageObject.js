const ParentPageObject = require('./parentPageObject')

class LoginPageObject extends ParentPageObject {

    get loginMenuItem() {
        return $('[data-testid="nav-login"]');
    }

    get inputEmail() {
        return $('#email')
    }

    get inputPassword() {
        return $('#password')
    }

    get recaptchaFrame() {
        return $('iframe[title="reCAPTCHA"]')
    }

    get loginButton() {
        return $('button=Log in')
    }

    async clickLoginMenuItem() {
        await this.loginMenuItem.click();
    }

    async verifyCaptcha() {
        await this.recaptchaFrame.click({ x: 30, y: 30 });
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.verifyCaptcha();
        await browser.pause(10000)
        await this.loginButton.click();
    }

    get errorMessage() {
        return $('.css-1n7jhhc')
    }
}
module.exports = LoginPageObject