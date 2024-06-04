const ParentPageObject = require('./parentPageObject');

class TrendingNowPageObject extends ParentPageObject {
  get acceptButton() {
    return $('#onetrust-accept-btn-handler');
  }

  clickLinkByText(txt) {
    const link = $(`//a[text()="${txt}"]`);
    link.click();
  }

  async acceptCookies() {
    this.acceptButton.click();
  }

  async selectSixthListing() {
    await browser.pause(5000);
    const elementsWithTestId = $$('[data-testid="offer-tile-title-container"]');
    elementsWithTestId[5].click(); // Click the 6th element (0-based index)
  }
}

module.exports = TrendingNowPageObject;
