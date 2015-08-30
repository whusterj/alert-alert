[![npm version](https://badge.fury.io/js/alert-alert.svg)](http://badge.fury.io/js/alert-alert)
[![Build Status](https://travis-ci.org/whusterj/alert-alert.svg?branch=master)](https://travis-ci.org/whusterj/alert-alert)

# Alert! Alert!


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

This package uses Browserify, tape, PhantomJS, and tape-run for headless browser testing.

If attempting to run these tests on Windows, we first need to find and copy `phantomjs.exe` (nested in `node_modules`) to `C:\Users\[UserName]\AppData\Roaming\npm`, [because of this old issue](https://github.com/joyent/node/issues/2318). I found the solution on [this mocha-phantomjs issue](https://github.com/nathanboktae/mocha-phantomjs/issues/61).

## Build

Clone this repo, then:

```
npm install
npm run build
```

