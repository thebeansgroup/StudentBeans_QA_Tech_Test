Feature: Simple Search

  Scenario: As a user I want to search for a brand on studentbeans.com so that I can see if I can get a discount on that brand
    Given I am on the studentbeans homepage
    And I open the search bar
    When I enter "Samsung"
    # Note: There were only 3 "Samsung" listings returned, so I selected the 3rd listing:
    Then I should select the 3rd "Samsung" search listing
