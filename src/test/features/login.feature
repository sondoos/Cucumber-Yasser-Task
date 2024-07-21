Feature: Login Tests

 Background:
    Given User navigates to the application

  Scenario: Login should be success
    And User Opens Login page
    And User enters the username as "Test1"
    And User enters the password as "123456789$Ss"
    When User clicks on the login button
    Then Login should be success

