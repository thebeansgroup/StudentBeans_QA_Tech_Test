Feature: User Login

Scenario: Invalid Login
    Given I am on the studentbeans homepage
    And I select the login button
    And my email is "test@test.com"
    And my password is "testingStuff"
    When I enter these credentials
    Then I trigger the user and password error message