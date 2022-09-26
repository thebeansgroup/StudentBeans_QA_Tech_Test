Feature: Select Option 6 in top 20 offers

Scenario: As a user, I want to select the 6th option in the Top 20 offers
    Given I am on the studentbeans homepage
    And I select the Top 20 offers
    When I open the 6th discount option
    Then I should see the Get Discount button