Feature: Login

    Scenario Outline: Error Messages
        Given I am on the studentbeans homepage
        And I accept cookies
        And I click the Login link
        When I enter '<Username>' and '<Password>' in the login form
        # Note: Below step fails as manual recaptch validation is required:
        Then I see the '<Error>'
        Examples:
            | Username      | Password     | Error                                                    |
            | test@test.com | testingStuff | The password you entered is incorrect. Please try again. |
