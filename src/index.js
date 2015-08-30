'use strict';

var Alert = require('alert-alert');

console.log('Alert', Alert);

document.getElementById('defaultAlertBtn').addEventListener('click', function () {
    Alert.alert('default', 'Hello World');
});
