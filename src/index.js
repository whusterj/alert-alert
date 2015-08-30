'use strict';

var Alert = require('alert-alert');

console.log('Alert', Alert);

var genAlertBtn     = document.getElementById('defaultAlertBtn'),
    infoAlertBtn    = document.getElementById('infoAlertBtn'),
    successAlertBtn = document.getElementById('successAlertBtn'),
    warnAlertBtn    = document.getElementById('warningAlertBtn'),
    errorAlertBtn   = document.getElementById('errorAlertBtn');

genAlertBtn.addEventListener('click', newAlert);
infoAlertBtn.addEventListener('click', infoAlert);
successAlertBtn.addEventListener('click', successAlert);
warnAlertBtn.addEventListener('click', warnAlert);
errorAlertBtn.addEventListener('click', errorAlert);

function newAlert (type, message, timeout) {
  var type = type || 'info',
      message = message || '<p>Boring ol\' default....</p>',
      config = {
        timeout: timeout || 7000
      };
  
  // AND HERE'S THE MAGIC:
  Alert.alert(type, message, config);
}

function infoAlert () {
  newAlert('info', '<p>Here\'s some vital info!</p>');
}

function successAlert () {
  newAlert('success', '<p>Waaah! Great success!</p>');
}

function warnAlert () {
  newAlert('warning', '<p>Ah, ah, ah. I wouldn\'t do that!</p>');
}

function errorAlert () {
  newAlert('error', '<p>Woah! Oh noes! Something broke!</p>');
}

// Syntax highlighting for demo
hljs.initHighlightingOnLoad();
