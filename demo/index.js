(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Alert! Alert! is a minimalist JavaScript growl-style notification library
 * designed to run in modern browsers without external dependencies.
 *
 * @author  William Huster  <whusterj@gmail.com>
 * @version 1.0.9
 *
 * Usage:
 *
 *     var type    = 'info',
 *         message = '<p>Something you outta know!</p>',
 *         config  = { timeout: 7000 };
 *
 *     Alert.alert(type, message [, config]);
 *
 * @param type: type of alert - 'info', 'success', 'warning', or 'error'
 * @param message: string/html to display in notification
 * @param config: currently only supports 'timeout' - how long to wait before
 *                dismissing the notification.
 */

'use strict';

module.exports = (function () {

  var container,
      CONTAINER_ID  = 'aa-container',
      ALERT_CLASS   = 'aa-notification';

  exports = {
    alert: _alert
  };

  return exports;

  /////////////////////////////////////////
  // functions

  function _alert (type, message, config) {
    if (typeof(config) === 'undefined') { config = {}; }
    if (!container) { container = _genNotificationContainer(); }
    container.appendChild(
      _genAlertDiv(type, message, config.timeout)
    );
  }

  function _genNotificationContainer () {
    if (container) { return; }
    var containerDiv = document.createElement('div');
    containerDiv.id = CONTAINER_ID;
    document.body.appendChild(containerDiv);
    return containerDiv;
  }

  function _genAlertDiv (type, message, timeout) {
    var alertDiv = document.createElement('div');
    alertDiv.className = ALERT_CLASS + ' ' + type;
    alertDiv.innerHTML = message;

    //
    alertDiv.addEventListener('click', _alertClickHandler);

    //
    if (timeout) {
      alertDiv.timeout = setTimeout(
        function () {
          _removeAlert(alertDiv);
        }, timeout); 
    }

    return alertDiv;
  }

  function _removeAlert (alert) {
    window.clearTimeout(alert.timeout);
    container.removeChild(alert);
  }

  function _alertClickHandler (event) {
    _removeAlert(event.currentTarget);
  }

})();

},{}],2:[function(require,module,exports){
'use strict';

var Alert = require('alert-alert');

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

},{"alert-alert":1}]},{},[2]);
