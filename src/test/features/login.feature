Feature: Login Tests

 Background:
    Given User navigates to the application

  Scenario: Login should be success
    And User enters the username as "tomsmith"
    And User enters the password as "SuperSecretPassword!"
    When User clicks on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enters the username as "tomsmith"
    Given User enters the password as "Password"
    When User clicks on the login button
    But Login should fail