#!/usr/bin/env node
"use strict";

const path = require("path");
const { execSync } = require("child_process");
const fs = require("fs");

const PWD = process.cwd();
const pkgPath = path.join(PWD, "package.json");
const pkg = require(pkgPath);
const scripts = require("./scripts.json");

// Add a script section if it doesn't exist. Unlikely but just in case.
if (!("scripts" in pkg)) pkg["scripts"] = {};
pkg.scripts = { ...scripts, ...pkg.scripts };

// Write the package.json back with the scripts injected.
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log("@toml.dev npm scripts installed successfully.");

// Copy the files from the "includes" directory to the root of the project.
const includesPath = path.resolve(__dirname, "..", "..", "includes", "*");
execSync(`cp -R -n "${includesPath}" ${PWD}`, { stdio: "inherit" });
console.log("@toml.dev config files copied.");
console.log("Just delete the ones you don't want!");
