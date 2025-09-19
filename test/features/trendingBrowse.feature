Feature: Trending Browse

    Scenario: As a user I can browse the trending section as expected
        Given I go to the studentbeans homepage
        When I click the Trending Now link
        Then I am navigated to the Trending Discounts page
        Then I should select the 6th discount offer in the trending section