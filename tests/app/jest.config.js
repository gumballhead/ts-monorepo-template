module.exports = {
    name: "app",
    displayName: "app",
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>/**/*.spec.ts"],
    moduleFileExtensions: ["ts", "js", "tsx", "jsx"],
    transform: {
        ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/empty.js",
        ".(css|less)$": "<rootDir>/empty.js",
    }
};
