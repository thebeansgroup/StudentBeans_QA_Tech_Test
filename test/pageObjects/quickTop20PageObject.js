const ParentPageObject = require('./parentPageObject')

class QuickTop20PageObject extends ParentPageObject {
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



  async clickAcceptAllCookiesButton() {
    await this.buttonAcceptAllCookies.click()
    console.log("Cookies Selected")
  }

  async clickTop20HomePage(){
    const navigationOptions = $$("//div[@class='_1whzvnz']//li[@style='display: inline-block;']//span[@style='display: inline-block; position: relative; padding: 0px 0.5em;']")

    for (let i = 0; i < navigationOptions.length; i++){
      const text = await navigationOptions[i].getText()

      if(text.includes("Top"))
      {
        await navigationOptions.click()
        break
      }
    }
  }

  async clickMcDonaldsLink(){
    const navigationOptions = $$("//div[@style='float: left; position: relative; width: 33.3333%; padding-left: 10px; padding-right: 10px;']//h4[@itemprop='name']")

    for (let i = 0; i < navigationOptions.length; i++){
      const text = await navigationOptions[i].getText()

      if(text.includes("Cheeseburger"))
      {
        await navigationOptions.click()
        break
      }
    }
  }

  async verifyMcDonaldsDiscountPage () {
    await this.isElementEqualToExpected($('[class="_1glzvfh"]'), 'Free Cheeseburger, Mayo Chicken or McFlurry® Original')
  }
}


module.exports = QuickTop20PageObject
