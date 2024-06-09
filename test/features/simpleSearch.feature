Feature: Simple Search

Scenario: As a user I want to search for a brand on studentbeans.com so that I can see if I can get a discount on that brand
  Given I am on the studentbeans homepage
  When I open "The Search Bar"
  When I set "Search Box" with "Samsung" on Simple Search Page
  Then I should select "The 4th Samsung" search listing
  And I verify "Element Title" includes "Samsung"


 Scenario: As a user i am able to see Trending Now offers clicking the link and I can choose offers
 Given I am on the studentbeans homepage
 When I click on "Trending Now" offers link
 Then I am able to see Trending Now offers with "https://www.studentbeans.com/uk/trending-discounts?source=nav" Url
 And I am able to open "The Discounts" of "6" within the Trending Now offers list

