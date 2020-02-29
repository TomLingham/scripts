# @toml.dev/scripts

One place for all the config that I usually have to pull together each time I
start I new project. Nothing too fancy. Nothing too special. A little time saved
— that's all!

It does do 2 things:

1. Provides a set of npm run scripts that can be automatically installed into
   your `package.json` file `scripts` section.
2. Provides a set of configuration files for the associated tooling.

See **Tooling** for more information.

## Installation

```sh
npm install --save-dev @toml.dev/scripts
```

## Usage

To install the npm run scripts into your `package.json` and copy the
configuration files to the root of your project, in the same directory as your
`package.json`, run:

```sh
npx tl-install
```

This command is non-destructive and idempotent. It will not overwrite run
scripts that have the same name, nor will it copy over existing configuration
files with the same names.

## Tooling

### Babel

Configured with React, Styled Components, and as the Typescript parser.

### Editor Config

Basic support for most files with a special case for Makefiles.

### Eslint

Configured to support Typescript, react, and with the default recommended rules.
Some some very minimal tweaks to better support my personal coding style.

### Jest

Typescript support with `babel-jest`. Supports tests inside folders with the
name `__test__` and that have the extension `.test.ts`. It also collects
coverage from any files (that aren't these test files) inside the `./src`
directory of the project.

### Prettier

The only change to the defaults is `"proseWrap": "always"` so I can format
markdown files a little nicer and avoid soft wrapping in vscode which is a pain
to edit with with navigating vertically.

### Stylelint

Very basic config, just to support styled-components.

### Typescript

Typical strict Typescript configuration for use with Babel as the actual parser.
Not intended for actually outputting JS from the TS files.
