<h1 align="center"> ReactJS Test Application </h1>

## Introduction
A lightweight `React` + `Redux` + `SCSS` + `Material-UI` application created without using `create-react-app` fully written in `TypeScript`.

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
    │   ├── core/                  # Core and reusable components
    │   ├── <component>/           # Project component
    │   ├── global.scss            # Main stylesheet
    │   ├── index.html             # Main template file
    │   ├── index.js               # Main scripts
    │   └── reducers.js            # Root reducer file
    │   └── routes.js              # Route definitions
    └── webpack.config.js          # Webpack configuration file

#### Display Structure
     ___________________
    |  _______________  | <App />
    | |_______________| |  ├─ <Nav />
    |  _______________  |  │
    | |               | |  └─ <Container />
    | |               | |      └─ <Route />
    | |_______________| |
    |___________________|

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
* <img width=20 height=20 src="https://redux.js.org/img/favicon/favicon.ico"> [Redux](https://reactjs.org/) - State Container Management
* <img width=20 height=20 src="https://www.typescriptlang.org/assets/images/icons/favicon-32x32.png"> [TypeScript](https://www.typescriptlang.org/) - Language syntax and compiler
* <img width=20 height=20 src="https://material-ui.com/static/favicon.ico"> [Material-UI](https://material-ui.com/) - Web Layouting
* <img width=20 height=20 src="https://sass-lang.com/favicon.ico"> [Sassy CSS (SCSS)](https://sass-lang.com/) - CSS pre-processor
* <img width=20 height=20 src="https://webpack.js.org/bc3effb418df77da9e04825c48a58a49.ico"> [Webpack 4](https://webpack.js.org/) - Project bundler
* <img width=20 height=20 src="https://www.netlify.com/img/global/favicon/favicon-32x32.png"> [Netlify](https://www.netlify.com/) - Continuous Deployment (CD) service
* <img width=20 height=20 src="https://terser.org/img/terser-square-logo.png"> [Terser](https://terser.org/) - ES6+ (JavaScript) mangler and compression toolkit
* <img width=20 height=20 src="https://yarnpkg.com/favicon.ico"> [Yarn](https://yarnpkg.com/) - Package Manager
