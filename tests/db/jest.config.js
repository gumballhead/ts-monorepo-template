module.exports = {
    name: "db",
    displayName: "db",
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["<rootDir>/**/*.spec.ts"],
    moduleFileExtensions: ["ts", "js"],
    setupFiles: ["<rootDir>/jest.setup.js"]
};
