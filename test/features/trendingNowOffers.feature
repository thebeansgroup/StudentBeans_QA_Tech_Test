
Feature: Accessing Trending Now offers and opening the 6th discount

  Scenario: Opening the 6th discount in Trending Now offers
    Given I am on the Student Beans UK website
    When I navigate to the Trending Now offers
    And I open the 6th discount within the Trending Now offers list
    Then I should see the details of the opened discount