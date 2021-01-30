import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let location: string;

Given("an app", () => {
    location = "/";
});

When("I load the app", () => {
    cy.visit(location);
});

Then(/I see a greeting: "(.*)"/, (greeting: string) => {
    cy.get(".greeting").contains(greeting);
});
