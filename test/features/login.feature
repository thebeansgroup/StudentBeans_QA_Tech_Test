Feature: Login
  As a user
  I want to be able to attempt to login with invalid credentials
  So that I see error messages appear

  Scenario Outline: email and password validation
    Given I am on the studentbeans homepage
    And I click the login button
    When I enter the "<email>" and "<password>"
    Then I should see the "<error_message>" display

    Examples:
      | email         | password     | error_message                               |
      | test@test.com |              | Please enter your password                  |
      |               | testingStuff | The email is invalid.                       |
      | test@test.com | testing      | Your password must be at least 8 characters |