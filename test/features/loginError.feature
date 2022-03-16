Feature: Login Error

Scenario: As a user I want to observe an error message when invalid login credentials are used on the login page
  Given I am on the studentbeans login page
  And I have entered invalid login credentials
  When I select the "Log in" button
  Then I should observe an error message

