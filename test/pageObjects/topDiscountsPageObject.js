const ParentPageObject = require('./parentPageObject')

class TopDiscountsPageObject extends ParentPageObject {

    get top20NavItem() {
        return $('[data-testid="nav-category-top-20-student-discounts"]');
    }

    get sixthDiscount() {
        return $$('[data-testid="offer-image-container"]')[5]
    }

    async clickNavItem() {
        await this.top20NavItem.click();
    }

    async clickTile() {
        await this.sixthDiscount.click();
        await browser.pause(2000)
    }
}

module.exports = TopDiscountsPageObject