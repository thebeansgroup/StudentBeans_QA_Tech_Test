Feature: User Login

  Scenario Outline: As a user I should get a relevant error message if my login details are incorrect
    Given I am on the studentbeans homepage
    And I go to the login page
    When I enter "<email>" and "<password>"
    Then I should get an error message displayed
    Examples:
    |email|password|
    |test@test.com|testingStuff|

