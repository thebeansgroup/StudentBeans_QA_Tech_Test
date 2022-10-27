Feature: User login

Scenario: As a user, I want to input username and password to trigger the error messaging
    Given I am on the studentbeans homepage
    And I select the login option
    And I enter my username as "test@test.com"
    And I enter my password as "testingStuff"
    When I enter these credentials
    Then I should see the error message