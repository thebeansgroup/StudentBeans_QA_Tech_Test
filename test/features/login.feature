Feature: Error Messages for Login functionality

    Scenario Outline: As a user, I should be able to see error messages on Log in page when I enter wrong username or password

        Given I am on the studentbeans homepage
        When I click on Login menu item
        When I login with <email> and <password>
        Then I should see an error message saying <message>
        Examples:
            | email         | password     | message                                                  |
            | test@test.com | testingStuff | The password you entered is incorrect. Please try again. |