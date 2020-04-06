#!/usr/bin/env node
"use strict";

const cpy = require("cpy");
const fs = require("fs");
const path = require("path");
const PWD = process.cwd();

/**
 * Install the run scripts into the package.json, then write package.json back
 * to the disk.
 */
{
  const pkgPath = path.join(PWD, "package.json");
  const pkg = require(pkgPath);

  pkg.scripts = { ...require("./scripts.json"), ...pkg.scripts };

  // Write the package.json back with the scripts injected.
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log("@toml.dev npm scripts installed successfully.");
}

/**
 * Copy the files from the "includes" directory to the root of the project.
 */
{
  // This is the path to the folder of files that we want to copy.
  const includesPath = path.resolve(__dirname, "..", "..", "includes");

  // Get a list of all the files and copy each one, if it doesn't already exist
  // in the destination path.
  fs.readdirSync(includesPath).forEach((file) => {
    const filePath = path.join(includesPath, file);
    const destinationPath = path.join(PWD, file);

    if (!fs.existsSync(destinationPath)) {
      cpy(filePath, PWD);
    }
  });

  console.log("@toml.dev config files copied.");
  console.log("Just delete the ones you don't want!");
}
