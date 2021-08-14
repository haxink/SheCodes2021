# SheCodes2021 

This is the repository of the SheCodes2021 project. It contains important considerations and instructions and every new developer on the project should read through it carefully.

## Getting started

To start clone the repository as usual and install its dependencies.

```bash
git clone https://github.com/haxink/SheCodes2021.git
npm install
```

In order to test the app you also need to establish a connection to the backend (Firebase). For this create a file called 'private.ts' in the 'src' folder and define 'firebaseConfig' constant. You'll get the configurations from an admin.

```bash
touch src/private.ts
```

```typescript
// in private.ts
export const firebaseConfig = {
    apiKey: "<Get the info from development lead>",
    authDomain: "<Get the info from development lead>",
    databaseURL: "<Get the info from development lead>",
    projectId: "<Get the info from development lead>",
    storageBucket: "<Get the info from development lead>",
    messagingSenderId: "<Get the info from development lead>",
    appId: "<Get the info from development lead>"
};
```

Alternatively you may also setup your own Firebase sandbox. This might be useful to experiment with different data structures.

## Branching model

The project follows the Gitflow branching model as described [here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

We use the following branch types:

- __feature/*__ to add new features/functionality or major refactors to the app
- __bugfix/*__ to fix bugs which will be committed with next release
- __hotfix/*__ immediate fixes of bugs that block production and/or development
- __release/*__ to prepare releases

You must never push to the __main__ branch directly. To add new features developer should lodge a pull request of their feature/bugfix/hotfix branches. And admin will then merge these into the develop branch (and the release branch if applicable or the master branch for hotfixes).

## Style guide

For consistency we follow the [Angular Style Guide](https://angular.io/guide/styleguide#symbols-and-file-names). Please ensure that functions are small (Angular Guide: no more than 75 lines) and symbol names are clear in what they represent. That way, the code itself should be self explanatory. We encourage comments in the JSDoc format. Please _always_ use comments if you have to do workarounds, fixes or the control flow is not obvious.

### Code formatting

To make reading pull requests pleasant and efficient we encourage code formatted as harmonized as possible. This is not a strict rule as we understand different developers feel comfortable with different formats. The following is the general guideline that should help us minimize pure code formatting changes littering our git commits.

This project is managed via Angular CLI. The CLI has a number built-in features to help staying organized:

- **.editorconfig** which is known to most popular IDEs
- **tslint.json** which builds on top of TSLints out-of-the-box rules and uses Codelyzer as a dictionary, too
- **codelyzer** a dev dependency which defines linting rules for Angular

In order for the linters to work, you must ensure that your text editor is configured correctly. It is beyond the scope of the this guide to give detailed instructions on how to do this. The following is a short guide how to make it pleasant with VS Code.

#### Automate code formatting in VS Code

1. Make sure that the [TSLint extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) is installed.
2. Disable the Prettier extension should you have it installed. While Prettier might be a great choice for some projects, it is very opinionated and might create a lot of unnecessary formatting changes.
3. Enable code formatting on save: _Preferences - Settings - User - Text Editor - Formatting_ and tick _Format on Save_ option.
4. To have TSLint fix things on save you can add the following to your `settings.json`:

```json
    "editor.codeActionsOnSave": {
        "source.fixAll.tslint": true
    }
```

### Todo's

If you need to defer code to be done at a later timepoint or you realize that certain pieces of code could be refactored please mark these with a todo comment. In order to easily find todo's across the project we ask everybody to follow the following format:

```javascript
// Todo: <what needs to be done>
// <[optional] any additional commentary concerning the todo>
```

## Data model

We use NoSQL on the backend. The data modelling therefore is slightly different from the common relational database mappings we are use to. In short, we follow the idea that we expect a lot more 'reads' than 'writes', therefore we optimize the model for reads. This also means that we duplicate data at times and keep them in sync via code. The goal is typically to construct a view with 1 read and without having to do any 'joins' as we know them from the SQL world. The current model looks as follows (note that this is constantly work in progress):

- __/companies__: root collection containing list of companies in the platform.

### Managing relations

#### Companies

- __Create__ no specific action
- __Read__ no specific action
- __Update__ no specific action
- __Delete__ no specific action