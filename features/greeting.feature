Feature: greeting
  Scenario: greeting
    Given an app
    When I load the app
    Then I see a greeting: "Hello, World!"
