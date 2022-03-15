Feature: Simple Search

@ignore
Scenario: As a user I want to select a top 20 discount on studentbeans.com so that I can see if I can get a popular discount
  Given I am on the studentbeans homepage
  When I select the "Top 20" button
  Then I should select the 6th discount on the Top 20 offers list

