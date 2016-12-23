# eslint-config-tleunen-react

[![npm version](https://badge.fury.io/js/eslint-config-tleunen-react.svg)](http://badge.fury.io/js/eslint-config-tleunen-react)

Specific eslint configuration for React applications.

## Install

To make sure to install the correct versions for each peer dependency, here's a command you can run:

```sh
(
  export PKG=eslint-config-tleunen-react;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

## Usage

Add `"extends": "tleunen"` in the .eslintrc file (or other specific eslint configuration file)


### Special thanks

Special thanks to [Airbnb](https://github.com/airbnb/javascript) for their configuration
