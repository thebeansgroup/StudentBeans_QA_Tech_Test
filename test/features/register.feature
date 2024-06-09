Feature:Register Functionalities

Background: 
Given I am on the studentbeans homepage

Scenario Outline: As a user when I use invalid credential for registiration purposes in email and password input boxes on studentbeans.com,I shoukd be able to see I see error messages.
When I click "Register Button" on Simple Search Page
And I set "Email Address InputBox" with <invalidEmail>
And I set "Password InputBox" with <invalidPassword>
When I move on to "Let's go Button" on Register Page
Then I assert "Email Error Message" display as <emailErrorMessage>
Then I assert "Password Error Message" display as <passwordErrorMessage>
Examples:
    | invalidEmail | emailErrorMessage      |invalidPassword|passwordErrorMessage|
    | "asiye@test" |"The email is invalid." |"UK"           |"Your password must be at least 8 characters"|