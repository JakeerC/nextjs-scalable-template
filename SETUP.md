> [!important]
>  This repo is not maintained ⚠️
> 
>  Use for this repo test purposes only

# Steps follwed to setup this template

## Engine Locking

We would like for all developers working on this project to use the same Node engine and package manager we are using. To do that we create two new files:

- .nvmrc - Will tell other uses of the project which version of Node is used
- .npmrc - Will tell other users of the project which package manager is used

- Add engines in package.json

## Code Formatting and Quality Tools

In order to set a standard that will be used by all contributors to the project to keep the code style consistent and basic best practices followed we will be implementing two tools:

- eslint - For best practices on coding standards
- prettier - For automatic formatting of code files
  - add prettier lib

## Git Hooks

We are going to implement a tool called Husky

Husky is a tool for running scripts at different stages of the git process, for example add, commit, push, etc.

All the git-hooks reside in .hooks directory

- Add husky lib
- Add pre-commit hook
- Add pre-push hook
- Add commit-msg hook using commit-lint lib (need to add it's own config file ,couple of libs)
  - @commitlint/cli
  - @commitlint/config-conventional

## VS Code Configuration

setup launch.json , settings.json to make project consistent among team irrespective of their custom vscode settings

## Debugging

set up a convenient environment for debugging our application in case we run into any issues during development.

- Inside of your .vscode directory create a launch.json

In addition to this, or if you are not using VS Code, we can also set up some helpful debugging scripts in your project.

- Install the cross-env which will; be necessary to set environment variables if you have teammates working on different environments (Windows, Linux, Mac, etc).

[Reference & credits](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7)

## Storybook - Documentation

Add storybook `npx storybook init`
change config in .storybook/main(add staticDir) .storybook/preview
