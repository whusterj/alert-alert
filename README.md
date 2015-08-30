# Alert! Alert! Demo

This is the Github Pages branch of the Alert! Alert! repo. This branch contains a package.json as well as HTML, CSS, JS and build scripts for web pages that demonstrate how you can use the `alert-alert` npm package in your project.

## Installation

```bash
npm install alert-alert
```

## Use in Your Node App

```javascript
var Alert = require('alert-alert');

var messageType = 'info';
var message = 'Something important!';

// trigger the alert...
Alert.alert(messageType, message[, options]);

// This will cause a pop-up notification with a blue stripe to appear
// that says "Something Important."
```

I highly recommend using browserify to build your application, which will bundle.

Here, I also demonstrate using [postcss-import](https://github.com/postcss/postcss-import) to include the Alert! Alert! styles in a straightforward way in your app's stylesheets. Take a look at `src/index.css` to see how the import is done and `build.js` to see how that stylesheet is processed.
