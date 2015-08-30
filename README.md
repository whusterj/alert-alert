# Alert! Alert!

## Current Vesion: 1.0.5

Alert! Alert! is a minimalist JavaScript growl-style notification library designed to run in modern browsers without external dependencies.

### [Demo](http://codepen.io/whusterj/full/qEWMwG/)

## Install

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
