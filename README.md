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
    message = '<p>Something you outta know!</p>',
    config  = { timeout: 7000 };

Alert.alert(type, message, config);
```

## Build

Clone this repo, then:

```
npm install
npm run build
```
