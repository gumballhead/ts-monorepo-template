Feature: Health Status
  Scenario: Api is up
    Given an app
    When I load the app
    Then I see the api's health status
    And I see when the api was started
    Then I see the api process uptime
