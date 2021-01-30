module.exports = {
    name: "api",
    displayName: "api",
    preset: "ts-jest",
    testEnvironment: "node",
    setupFiles: ["<rootDir>/jest.setup.js"],
    testMatch: ["<rootDir>/**/*.spec.ts"],
    moduleFileExtensions: ["ts", "js"]
};
