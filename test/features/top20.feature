Feature: Top 20
  As a user
  I want to navigate the top 20 discounts on offer
  So that I can see if I can get the most popular discounts

  Scenario: select discount from Top 20 offers list
    Given I am on the studentbeans homepage
    When I click the Top 20 offers link
    And I should select the 6th discount on the Top 20 offers list
    Then I should see the discount page