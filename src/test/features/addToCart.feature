Feature: Add products to cart

  Background:
    Given User navigates to the application
    And User Opens Login page

  Scenario Outline: Authenticated Users - Add to cart
    And User enters the username as "<username>"
    And User enters the password as "<password>"
    And User clicks on the login button
    When user searchs for a "<book>"
    And user adds the book to the cart
    Then the cart badge should get updated

    Examples:
      | username | password  | book            |
      | Test1   | 123456789$Ss | all the light we cannot see |
      | Test1 | 123456789$Ss  | The Simple Wild |