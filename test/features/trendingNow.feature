Feature: Trending Now

Scenario: As a user I want to access trending now homepage and check for any available discounts 
  Given I am on the studentbeans homepage
  And I can navigate to the trending now page
  When I click on a trend
  Then I should be able to access that trend