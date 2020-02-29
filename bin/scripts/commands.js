"use strict";
const e = exports;

// Auto formatter
e["format"] = "npx prettier '**/*.{js,md,ts,tsx}'";
e["format:check"] = `${e["format"]} -l`;
e["format:fix"] = `${e["format"]} --write`;

// Lint JS
e["lint:js:check"] = "npx eslint 'src/**/*.{js,ts,tsx}'";
e["lint:js:fix"] = `${e["lint:check"]} --fix`;

// Lint Styles
e["lint:css:check"] = "npx stylelint 'src/**/*.{js,ts,tsx}'";
e["lint:css:fix"] = `${e["lint:check"]} --fix`;

// Unit tests
e["test"] = "npx jest --verbose";
e["test:watch"] = `${e["test"]} --watch`;

// Force compiler check
e["types:check"] = "tsc --noEmit";
