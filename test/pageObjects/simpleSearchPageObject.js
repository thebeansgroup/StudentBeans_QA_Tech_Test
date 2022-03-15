const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
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

  get searchBar(){
    return $('[class="_tf5swf"]')
  }

  async clickAcceptAllCookiesButton() {
    await this.buttonAcceptAllCookies.click()
    console.log("Cookies Selected")
  }

  async clickSearchButton() {
    const search = await $('[class="_tf5swf"]')
    await search.click()
    console.log("Search Bar Selected")
    browser.pause(5000)
    const el = await $('[class="_1g5dvk1"]')
    await el.setValue('Samsung')
    console.log("Samsung")
  }
  
  // async searchSamsung(){
  //   browser.pause(5000)

  //   const fullBar = await $('[class="_1g5dvk1"]')

  //   await fullBar.scrollIntoView()
	
	//   await fullBar.setValue("Samsung")

  //   browser.pause(5000)

  //   await browser.debug()
  // }

  async searchSamsung (){
    const el = await $('[class="_1g5dvk1"]')
    let clickable = await el.isClickable();
    console.log(clickable); // outputs: true or false

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable())
    //await el.setValue("Samsung")
  }


  
  
}


module.exports = SimpleSearchPageObject
