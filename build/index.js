/**
 * Build script that builds Alert! Alert! as a node module
 * and as standalone files for, e.g., direct use in the browser.
 */
var buildJS = require('./build-js');
var buildCSS = require('./build-css');

buildJS.build({
    node: {
        src: 'src/js/alert-alert.js',
        dest: 'dist/node/js/alert-alert.js',
    },
    standalone: {
        src: 'src/js/alert-alert.js',
        dest: 'dist/standalone/js/alert-alert.js',
    },
});

buildCSS.build({
    node: {
        src: 'src/css/alert-alert.css',
        dest: 'dist/node/css/alert-alert.css'
    },
    standalone: {
        src: 'src/css/alert-alert.css',
        dest: 'dist/standalone/css/alert-alert.css',
    },
});
