# Bitfinex React App

## Project info

App fetches first 5 trading pairs from Bitfinex cryptocurrency broker API. By means of WebSockets, live updates of trading pairs can be seen in App Dashboard (Home page) and in Favorites page. Simple login functionality is implemented to test routing protection.

Custom proxy is used to avoid CORS issues in development environment. Configuration is in `src/setupProxy.js` file.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<br>

## Project setup

In the project directory, run:

```bash
$ npm install
```
If problems occur, try deleting `package-lock.json` file and `node_modules` directory, and try running install command again.

<br>

## Available Scripts

In the project directory, you can run:

```bash
$ npm start
```

Runs the app in the development mode.\
Default port is [http://localhost:3000](http://localhost:3000), copy and paste this link to view App in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```bash
$ npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
$ npm build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```bash
$ npm eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
