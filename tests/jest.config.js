module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["<rootDir>/**/*.spec.ts"],
    testPathIgnorePatterns: ["integration"],
    projects: [{
        preset: "ts-jest",
        testEnvironment: "node",
        moduleFileExtensions: ["ts", "js"],
    }, {
        preset: "ts-jest",
        testEnvironment: "jsdom",
        moduleFileExtensions: ["ts", "js", "tsx", "jsx"]
    }]
};
