const ParentPageObject = require("./parentPageObject")

class UserLoginPageObject extends ParentPageObject {
    async selectLogin() {
        await this.clickElement('a[data-testid="nav-login"]')
    }

    async enterEmail(email) {
        await this.typeInElement('#email', email);
    }

    async enterPassword(password) {
        await this.typeInElement('#password', password);
    }

    async confirmCredentials() {
        await this.clickElement('iframe[title="reCAPTCHA"]') //confirm captcha

        await browser.pause(3000);

        await this.clickElement('button[element="button"]') //select Login button

        await browser.pause(3000);
    }

    async triggerErrorMessage () {
        const errorMessage = `The password you entered is incorrect. Please try again.`
        await this.isElementEqualToExpected($('p[class="css-1n7jhhc"]'), errorMessage) 
    }
}

module.exports = UserLoginPageObject