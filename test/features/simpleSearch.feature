Feature: Simple Search
  As a user
  I want to search for a brand on studentbeans.com
  So that I can see if I can get a discount on that brand

  Scenario: search bar functionality
    Given I am on the studentbeans homepage
    And I open the search bar
    When I enter "Samsung"
    And I should select the 4th "Samsung" search listing
    Then I should see the discount page