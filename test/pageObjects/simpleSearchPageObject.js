const ParentPageObject = require('./parentPageObject');

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage() {
    await browser.url('');
  }

  async verifyHomePage() {
    await this.isElementEqualToExpected(
      $('h2=Recommended For You'),
      'Recommended For You'
    );
  }

  get acceptButton() {
    return $('#onetrust-accept-btn-handler');
  }

  get searchButton() {
    return $('[data-testid="nav-search-desktop"]');
  }

  get searchInput() {
    return $('[data-testid="search-input"]');
  }

  async openSearchBar() {
    this.acceptCookies();
    this.searchButton.click();
  }

  async enterTextInSearchBar(txt) {
    this.searchInput.setValue(txt);
  }

  async selectThirdSearchListing(txt) {
    await browser.pause(5000);
    const elementIndex = 2; // Index 2 corresponds to the 3rd element (0-based index)
    const selectedElement = await this.selectElementByTextAndIndex(
      'span',
      txt,
      elementIndex
    );

    if (selectedElement) {
      selectedElement.click();
    } else {
      console.log(`No 3rd element with the text "${txt}" found.`);
    }
  }

  async selectElementByTextAndIndex(tag, text, index) {
    const xpathSelector = `//${tag}[text()="${text}"]`;
    const elements = $$(xpathSelector);

    return elements[index];
  }

  async acceptCookies() {
    this.acceptButton.click();
  }
}

module.exports = SimpleSearchPageObject;
