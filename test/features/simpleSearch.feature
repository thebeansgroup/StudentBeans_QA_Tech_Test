Feature: Simple Search

Scenario: As a user I want to search for a brand on studentbeans.com so that I can see if I can get a discount on that brand
  Given I am on the studentbeans homepage
  When I click "Main Page Search Box" on Simple Search Page
  When I set "Search Box" with "Samsung"
  When I click "The 4th Item" on Simple Search Page
  When I wait
  When I get the text from "Element Title"
  # And I open the search bar
  # When I enter "Samsung"
  # Then I should select the 4th "Samsung" search listing
  # Then x

