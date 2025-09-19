Feature: Registration Data Validation Check

    Scenario: Check to see if the data entry validation is working on the registration page
        Given I navigate to the studentbeans homepage
        And I click on the "Register" button
        Then I should be on the a page with sign-up in the url
        When I try to register with an invalid email
        Then I should get an email validation error
        When I try to register with an invalid password
        Then I should get an password validation error
