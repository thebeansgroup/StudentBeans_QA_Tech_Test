const { expect } = require('chai')

const ParentPageObject = require('./parentPageObject')

class TrendingNowPageObject extends ParentPageObject{
  async verifyTrendNowPage () {
    await this.isElementEqualToExpected($('h1=The latest and best student discounts'), 'The latest and best student discounts')
  }
  
  async selectOptionSixTrnsc () {
    const sixthDeal = await $('.css-1b0petf:nth-child(6)')
    await sixthDeal.click()
  }
  
  async verifyDealPageIsAccessed () {
    await this.isElementEqualToExpected($('h3=FAQs'), 'FAQs')
  } 
} 

module.exports = TrendingNowPageObject