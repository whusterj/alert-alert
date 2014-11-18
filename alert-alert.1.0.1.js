/**
 * Alert! Alert! is a minimalist JavaScript growl-style notification library
 * designed to run in modern browsers without external dependencies.
 *
 * @author  William Huster  <whusterj@gmail.com>
 * @version 1.0.0
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

var Alert = (function () {
  
  var container,
      CONTAINER_ID  = 'aa-notificationContainer',
      ALERT_CLASS   = 'aa-notification',
      INFO_CLASS    = 'info',
      SUCCESS_CLASS = 'success',
      WARNING_CLASS = 'warning',
      ERROR_CLASS   = 'error';
  
  exports = {
    alert: alert
  };
  
  return exports;
  
  /// functions ///
  
  function alert (type, message, config) {
    if (typeof(config) === 'undefined') { config = {}; }
    if (!container) { container = genNotificationContainer(); }
    container.appendChild(
      genAlertDiv(type, message, config.timeout)
    );
  }
  
  function genNotificationContainer () {
    if (container) { return; }
    var containerDiv = document.createElement('div');
    containerDiv.id = CONTAINER_ID;
    document.body.appendChild(containerDiv);
    return containerDiv;
  }
  
  function genAlertDiv (type, message, timeout) {
    var alertDiv = document.createElement('div');
    alertDiv.className = ALERT_CLASS + ' ' + type;
    alertDiv.innerHTML = message;
    
    //
    alertDiv.addEventListener('click', alertClickHandler);

    //
    if (timeout) {
      alertDiv.timeout = setTimeout(
        function () {
          removeAlert(alertDiv);
        }, timeout); 
    }
    
    return alertDiv;
  }
  
  function removeAlert (alert) {
    window.clearTimeout(alert.timeout);
    container.removeChild(alert);
  }
  
  function alertClickHandler (event) {
    removeAlert(event.currentTarget);
  }
  
})();
