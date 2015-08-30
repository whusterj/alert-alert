var utils = require('./build-utils');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs-extra'));

var postcss = require('postcss');

exports.build = build;

function build (options) {
    /**
     * Process CSS and save for node and standalone
     */

    var minifiedOutFile = utils.minifyFilename(options.standalone.dest);

    var cssProcesses = [
        require('postcss-nested'),
        require('autoprefixer-core')({ browsers: ['last 2 versions'] }),
        require('postcss-simple-vars'),
    ]

    // Run our CSS through the processes defined above
    var processedCSS = fs.readFileAsync(options.node.src)
        .then(function (css) {
            return postcss(cssProcesses).process(css);
        })
        .catch(console.log);

    // Save the non-minified CSS for node and standalone packages
    processedCSS
        .then(function (result) {
            utils.saveFile(options.node.dest, result.css, 'Processed CSS file saved for node package.');
            utils.saveFile(options.standalone.dest, result.css, 'Processed CSS file saved for standalone.');
        })
        .catch(console.log);

    // Minify the processed output and save for standalone
    processedCSS
        .then(function (css) {
            return postcss([require('cssnano')]).process(css, {
                from: options.standalone.dest,
                to: minifiedOutFile,
                map: { inline: false },
            });
        })
        .then(function (result) {
            utils.saveFile(minifiedOutFile, result.css, 'Minified CSS file saved for standalone.');
            if (result.map) {
                utils.saveFile(minifiedOutFile + '.map', result.map, 'CSS source map file saved for standalone.');
            }
        })
        .catch(console.log);

}
