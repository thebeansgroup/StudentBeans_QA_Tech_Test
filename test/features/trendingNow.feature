Feature: Trending Now

    Scenario: As a user I want to open the 6th discount within the Trending Now offers list
        Given I am on the studentbeans homepage
        And I accept cookies
        When I click the 'Trending Now' offers link
        Then I open the 6th discount
