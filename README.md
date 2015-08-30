# Alert! Alert!

[![npm version](https://badge.fury.io/js/alert-alert.svg)](http://badge.fury.io/js/alert-alert)

Alert! Alert! is a minimalist JavaScript growl-style notification library designed to run in modern browsers without external dependencies.

### [Demo](http://whusterj.github.io/alert-alert/demo/)

## Install in Your Project

```
npm install alert-alert
```

## Use

```javascript
var type    = 'info',
    message = '<p>Something you oughta know!</p>',
    config  = { timeout: 7000 };

Alert.alert(type, message, config);
```

## Test

```
npm test
```

This package uses Browserify, tape, PhantomJS, and tape-run for headless browser testing. Tests require devDependencies to be installed, so the `npm test` command will run `npm install --dev` before running tests.

On Windows, we need to find and copy `phantomjs.exe` to `C:\Users\[UserName]\AppData\Roaming\npm`, [because of this old issue](https://github.com/joyent/node/issues/2318). I found the solution on [this mocha-phantomjs issue](https://github.com/nathanboktae/mocha-phantomjs/issues/61).

## Build

Clone this repo, then:

```
npm install
npm run build
```

