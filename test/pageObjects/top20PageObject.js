const ParentPageObject = require('./parentPageObject')

class Top20PageObject extends ParentPageObject {
  get top20Heading() { return $('h1=Top 20 Student Discounts') }
  get top20NavLink() { return $('._1whzvnz').$('a[href*=top-20]') }
  
  async goToTop20Page () {
    await this.top20NavLink.click()
  }
  
  async selectTop20Listing (index) {
    await $(`div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(1) > div:nth-child(${index})`).click()
  }
  
  async waitForLoad() {
    await this.waitForElementToBeDisplayed(this.top20Heading, "TOP 20 STUDENT DISCOUNTS")
  }
}

module.exports = Top20PageObject