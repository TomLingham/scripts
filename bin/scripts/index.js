#!/usr/bin/env node
'use strict';

const { execSync } = require("child_process");
const commands = require("./commands");

const [, , key] = process.argv;

if (!(key in commands)) {
  console.error("Command %s does not exist", key);
  process.exit(1);
}

try {
  const result = execSync(commands[key], { stdio: "inherit" });
} catch (error) {
  process.exit(error.status);
}
