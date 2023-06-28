const { By } = require('selenium-webdriver');
const driver = require('./driver'); // Assuming you have a separate file for initializing the WebDriver instance

class StudentBeansHomePage {
  async navigateToWebsite() {
    await driver.get('https://www.studentbeans.com/uk');
  }

  async navigateToTrendingNowOffers() {
    const trendingNowLink = await driver.findElement(By.linkText('Trending Now'));
    await trendingNowLink.click();
  }

  async openSixthDiscount() {
    const discountList = await driver.findElements(By.css('.discount-list li'));
    if (discountList.length >= 6) {
      const sixthDiscount = discountList[5];
      await sixthDiscount.click();
    } else {
      throw new Error('Not enough discounts in the list to open the 6th discount');
    }
  }

  async getOpenedDiscountDetails() {
    // Implement the logic to retrieve and return the details of the opened discount
  }
}

module.exports = new StudentBeansHomePage();