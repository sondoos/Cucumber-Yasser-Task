Feature: Add products to cart

  Background:
    Given User navigates to the application
    And User Opens Login page

  Scenario Outline: Authenticated Users - Add to cart
    And User enters the login email 
    And User enters the login password as "123456789$Ss"
    When User clicks on the login button
    And User searchs for a book as "HTC One M8"
    And User adds the book to the cart
    When User opens the cart
    Then the cart badge should get updated

