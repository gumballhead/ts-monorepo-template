import cucumber from "cypress-cucumber-preprocessor";
import resolve from "resolve";
import browserify from "@cypress/browserify-preprocessor";

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): void => {
    const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync("typescript", { baseDir: config.projectRoot })
    };

    on("file:preprocessor", cucumber.default(options));
};
