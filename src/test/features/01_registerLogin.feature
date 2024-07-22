Feature: Login and Register Tests

 Background:
    Given User navigates to the application

  Scenario: Register should be success
    When User opens the Register page
    And User selects his gender
    And User enters his firstName: as "Test1"
    And User enters his lastName: as "Test2"
    And User enters his email
    And User enters his password as "123456789$Ss"
    And User enters the confirmPassword as "123456789$Ss"
    When User clicks on the Register button
    Then User should be registered successfully

  Scenario: Login should be success
    And User Opens Login page
    And User enters the login email 
    And User enters the login password as "123456789$Ss"
    When User clicks on the login button
    Then Login should be success




