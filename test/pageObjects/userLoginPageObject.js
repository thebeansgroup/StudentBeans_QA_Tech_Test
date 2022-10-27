const ParentPageObject = require('./parentPageObject')

class UserLoginPageObject extends ParentPageObject {

    async selectLogin() {
        await this.clickElement('//*[@id="__next"]/div/header/div/div[1]/nav[2]/ul/li[4]/a')
    }

    async enterEmail(email) {
        await this.searchElement('//*[@id="email"]', email)
    }
    async enterPassword(password) {
        await this.searchElement('//*[@id="password"]', password)
    }
    async clickNotRobot() {
        await this.clickElement('//*[@id="authorisation_root"]/div/div/div[2]/div[4]/form/div[3]/div/div/div/div/iframe')
    }
    async clickLogin() {
        await this.clickElement('//*[@id="authorisation_root"]/div/div/div[2]/div[4]/form/div[4]/button')
    }
    async incorrectDetails() {

        const errMes = "The password you entered is incorrect. Please try again."
        await this.isElementEqualToExpected($('p[class="css-1n7jhhc"]'), errMes)
    }
}



module.exports = UserLoginPageObject