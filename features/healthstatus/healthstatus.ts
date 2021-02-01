import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let location: string;

Given("an app", () => {
    location = "/";
});

When("I load the app", () => {
    cy.visit(location);
    cy.get(".api-health").as("api-health");
});

Then("I see the api's health status", () => {
    cy.get("@api-health").get(".status").contains("The api is UP");
});

And("I see when the api was started", () => {
    cy.get("@api-health").get(".started > .value").should("not.be.empty");
});

And("I see the api process uptime", () => {
    cy.get("@api-health").get(".uptime > .value").should("not.be.empty");
});
