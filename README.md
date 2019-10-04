<h1 align="center"> ReactJS Test Application </h1>

## Introduction
A lightweight ReactJS application created without using `create-react-app`.

## Getting Started

### Running the project
1. [Download](https://nodejs.org/en/) the latest Node version. This is marked as `<version number> Current`. Install it on your machine.

2. _(Optional)_ [Download](https://yarnpkg.com/latest.msi) Yarn. This is a faster package manager than the default `npm` one.

3. Clone the project

    ```
    git clone https://github.com/RinMinase/anidb.git
    cd anidb
    ```

4. Install the dependencies then run the project

    ```
    npm install
    npm start
    ```

    **Note:** If you have installed Yarn, run these instead:

    ```
    yarn install
    yarn start
    ```

5. Fire up your browser and go to `localhost:3000`

### Project Structure
    .
    ├── assets/                    # Project assets
    ├── src/                       # Project source code
    └── webpack.config.js          # Webpack configuration file

### Building the project
Installations Required:
- Node
- _(Optional)_ Yarn

1. Fire up your terminal inside the project folder.

2. Build the project by running:

    ```
    npm run build
    ```

    **Note:** If you have installed Yarn, run these instead:

    ```
    yarn build
    ```

3. This should generate a `/dist` folder inside the project folder.

### Project tasks

Task automation is based on [Yarn scripts](https://yarnpkg.com/lang/en/docs/cli/run/) or [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task                | Description                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `yarn start`        | Run **development server** on `http://localhost:3000/` with file watching on changes   |
| `yarn build`        | Build production code                                                                  |

## Built with
* <img width=20 height=20 src="https://reactjs.org/favicon.ico"> [React 16](https://reactjs.org/) - Web Framework
* <img width=20 height=20 src="https://babeljs.io/img/favicon.png"> [Babel ES9 / ES2018 Preset](https://babeljs.io/) - Syntax and compiler
* <img width=20 height=20 src="https://material-ui.com/static/favicon.ico"> [Material-UI](https://material-ui.com/) - Web Layouting
* <img width=20 height=20 src="https://sass-lang.com/favicon.ico"> [Sassy CSS (SCSS)](https://sass-lang.com/) - CSS pre-processor
* <img width=20 height=20 src="https://webpack.js.org/bc3effb418df77da9e04825c48a58a49.ico"> [Webpack 4](https://webpack.js.org/) - Project bundler
* <img width=20 height=20 src="https://yarnpkg.com/favicon.ico"> [Yarn](https://yarnpkg.com/) - Package Manager
