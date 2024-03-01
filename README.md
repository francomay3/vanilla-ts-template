# Essential WebPack + TypeScript + esLint starter template

This is a simple starter template for building applications with TypeScript.

## Using this template

To use this template, click the "Use this template" button on this repository's main page. This will allow you to create a new repository with the same directory structure and files as this repository.

## Features

- TypeScript for type-safe code
- Webpack for bundling and dev server
- ESLint with Prettier for code formatting and linting

## Getting Started

After using the template and cloning your new repo into your machine, navigate to the repository directory with a terminal and install dependencies:

```sh
cd your-new-repository-name
npm install
```

Now you're ready to start developing! You can start the dev server with:

```sh
npm run start
```

This will start the dev server and open your default browser. The server will automatically reload when you save changes to your files.

## Developing

Yyour entry file is `index.ts` located iside the `src/` folder. When the application builds, this file will be added in a script tag to a generated `index.html` that is created on build.

## Building for Production

When you're ready to build your app for production, you can use the build script:

```sh
npm run build
```

This will create a `dist` directory with an html file that contains a script to your index.ts file.
