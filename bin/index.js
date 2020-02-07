#!/usr/bin/env node
const { execSync } = require("child_process");
const commands = require("./commands");

const [, , key] = process.argv;

if (!(key in commands)) {
  console.error("Command", key, "does not exist");
  process.exit(1);
}

const command = commands[key];

try {
  const result = execSync(command, { stdio: "inherit" });
} catch (error) {
  process.exit(error.status);
}
