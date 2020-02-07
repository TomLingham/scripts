exports["format"] = "npx prettier '**/*.{js,md,ts,tsx}'";
exports["format:check"] = exports["format"] + " -l";
exports["format:fix"] = exports["format"] + " --write";

exports["lint:check"] = "npx eslint 'src/**/*.{js,md,ts,tsx}'";
exports["lint:fix"] = exports["lint:check"] + " --fix";

exports["test"] = "jest --verbose";
exports["test:watch"] = exports["test"] + " --watch";

exports["types:check"] = "tsc --noEmit";
