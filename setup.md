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
