const ParentPageObject = require('./parentPageObject')

class TrendingNowPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async selectTrendingNowLink() {
    this.acceptCookie();//accept cookie if visible
    const trendingNowLink = $("[data-testid='nav-category-trending-now']");
    await trendingNowLink.click();
  }

  async selectTendingNowOffer(itemIndex) {
    const offerList = $$("[data-testid='offer-image-container'] img");
    const selectedOffer = offerList[itemIndex - 1];
    const getImageUrl = selectedOffer.getAttribute('src'); //Get the image url
    
    if(selectedOffer != null)
    {
      selectedOffer.click();
      return getImageUrl;
    }else{
      throw new console.error('No offer found at index ${itemIndex}');
    }
  }

  async getSelectedOffer(){
    const selectedOffer = $$("[itemprop='offers'][data-offer-selected='true'] img");
    const getImageUrl = selectedOffer[0].getAttribute('src'); //Get the image url
    return getImageUrl;
  }
}

module.exports = TrendingNowPageObject
