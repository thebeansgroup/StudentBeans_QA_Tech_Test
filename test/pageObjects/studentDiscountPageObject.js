const ParentPageObject = require('./parentPageObject')

class StudentDiscountPageObject extends ParentPageObject {
  async verifyDiscountPage () {
    await this.isElementEqualToExpected($('h3=About this student discount'), 'About this student discount')
  }
}

module.exports = StudentDiscountPageObject