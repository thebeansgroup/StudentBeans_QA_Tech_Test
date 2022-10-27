Feature: Select the 6th offer from the top twenty offers

Scenario: As a user, I want to select the 6th option in the Top 20 offers
    Given I am on the studentbeans homepage
    And I select the Top 20 offers
    When I open the 6th discount option
    Then I should see the get Discount button


   

