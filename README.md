[![npm version](https://badge.fury.io/js/alert-alert.svg)](http://badge.fury.io/js/alert-alert)
[![Build Status](https://travis-ci.org/whusterj/alert-alert.svg?branch=master)](https://travis-ci.org/whusterj/alert-alert)

# Alert! Alert!

> **Status: frozen.** The last release was in 2018, and this package is deprecated on npm. Nobody maintains it, and it will get no more updates.
>
> The library ships no runtime dependencies, so an install adds no vulnerable code to your project. The build tooling in `devDependencies` is from 2015 and does have known vulnerabilities, which matter only if you build the library yourself.


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

