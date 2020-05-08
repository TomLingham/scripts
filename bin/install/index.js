#!/usr/bin/env node
"use strict";

const path = require("path");
const fs = require("fs-extra");
const PWD = process.cwd();
const pjson = require("../../package.json");

/**
 * Install the run scripts into the package.json, then write package.json back
 * to the disk.
 */
{
  const pkgPath = path.join(PWD, "package.json");
  const pkg = require(pkgPath);

  // If it's the default, I'm going to feel fine overwriting it
  if (pkg.scripts["test"] === 'echo "Error: no test specified" && exit 1')
    delete pkg.scripts.test;

  pkg.scripts = { ...require("./scripts.json"), ...pkg.scripts };

  // Write the package.json back with the scripts injected.
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  const packages = Object.keys(pjson.peerDependencies);
  console.log("Run the following to install the required packages");
  console.log(
    `\n\x1b[36mnpm install -D \\\n  ${packages.join(" \\\n  ")}\x1b[0m\n`
  );
  console.log("@toml.dev npm scripts installed successfully.");
}

/**
 * Copy the files from the "includes" directory to the root of the project.
 */
{
  // This is the path to the folder of files that we want to copy.
  const includesPath = path.join(__dirname, "..", "..", "includes");

  // Get a list of all the files and copy each one, if it doesn't already exist
  // in the destination path.
  fs.readdirSync(includesPath).forEach((file) => {
    const filePath = path.join(includesPath, file);
    const destinationPath = path.join(PWD, file);

    if (!fs.existsSync(destinationPath)) {
      fs.copy(filePath, destinationPath);
    }
  });

  console.log("@toml.dev config files copied.");
}

console.log("Delete the files, scripts, and devDependencies you don't need!");
console.log("Don't forget to install any peer dependencies.");
