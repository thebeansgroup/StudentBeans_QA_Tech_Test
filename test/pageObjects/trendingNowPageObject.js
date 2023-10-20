const ParentPageObject = require('./parentPageObject')

class TrendingNowPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async selectTrendingNowLink() {
    this.acceptCookie();
    const trendingNowLink = $("[data-testid='nav-category-trending-now']");
    await trendingNowLink.click();
  }

  async selectTendingNowOffer(itemIndex) {
    const offerList = $$("[data-testid='offer-image-container'] img");
    const selectedOffer = offerList[itemIndex - 1];
    if(selectedOffer != null)
    {
      selectedOffer.click();
      return selectedOffer;
    }else{
      throw new console.error('No offer found at index ${itemIndex}');
    }
  }

  async getSelectedOffer(){
    const selecterOffer = $("[itemprop='offers'][data-offer-selected='true']");
    return selecterOffer;
  }
}

module.exports = TrendingNowPageObject
