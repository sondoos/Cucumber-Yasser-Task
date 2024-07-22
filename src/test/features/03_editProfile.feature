Feature: Edit the user's profile

  Background:
    Given User navigates to the application
    And User Opens Login page

  Scenario Outline: User can edit his profile
    And User enters the login email 
    And User enters the login password as "123456789$Ss"
    When User clicks on the login button
    And User clicks on My Account 
    And User edits firstName
    And User saves the changes
    Then The first name is updated successfully