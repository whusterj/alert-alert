var Alert = require('../src/js/alert-alert.js');
var test = require('tape');

var before = test;
var after = test;

before('setup', function (t) {

    Alert.alert('info', 'Test Message');

    t.end();

});

test('An alert container should be created', function (t) {

    t.plan(1);

    if (document.getElementById('aa-container')) {
        t.pass();
    } else {
        t.fail();
    }

});
