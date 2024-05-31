const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const StudentBeansHomePage = require('../pageObjects/StudentBeansHomePage');

const studentBeansHomePage = new StudentBeansHomePage();

Given('I am on the Student Beans UK website', async function () {
  await studentBeansHomePage.navigateToWebsite();
});

When('I navigate to the Trending Now offers', async function () {
  await studentBeansHomePage.navigateToTrendingNowOffers();
});

When('I open the 6th discount within the Trending Now offers list', async function () {
  await studentBeansHomePage.openSixthDiscount();
});

Then('I should see the details of the opened discount', async function () {
  const discountDetails = await studentBeansHomePage.getOpenedDiscountDetails();
  expect(discountDetails).to.exist;
});