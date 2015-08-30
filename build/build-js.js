var utils = require('./build-utils.js');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs-extra'));

var browserify = require('browserify');
var uglify = require('uglify-js');

exports.build = build;

function build  (options) {
    buildNodeJS(options);
    buildStandaloneJS(options);
}

function buildNodeJS (options) {
    /**
     * Not much to do here, just copy our module over to `dist/`
     */

    fs.copyAsync(options.node.src, options.node.dest)
        .then(function () {
            console.log('File copied!');
        });

}

function buildStandaloneJS (options) {
    /**
     * Browserify the Alert! Alert! CommonJS module,
     * and then save non-minified and minified versions.
     */
    
    var b = Promise.promisifyAll(browserify(
        options.standalone.src,
        {standalone: 'Alert'}
    ));

    var bundledJS = b.bundleAsync();

    bundledJS
        .then(function (buffer) {

            utils.saveFile(
                options.standalone.dest,
                buffer.toString('utf-8'),
                'Standalone JS file saved.'
            );
        })
        .catch(console.log);

    // Minify bundled code, generate source map, and save
    bundledJS
        .then(function (buffer) {

            var miniOutFile = utils.minifyFilename(options.standalone.dest);
            var miniOutFileMap = miniOutFile + '.map';

            var uglifiedJS = uglify.minify(buffer.toString('utf-8'), {
                sourceRoot: options.standalone.dest,
                outSourceMap: miniOutFileMap,
                fromString: true,
            });

            utils.saveFile(
                miniOutFile,
                uglifiedJS.code,
                'Uglified JS file saved.'
            );

            utils.saveFile(
                miniOutFileMap,
                uglifiedJS.map,
                'JS source map file saved.'
            );

        })
        .catch(console.log);

}