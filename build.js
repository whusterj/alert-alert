var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs-extra'));
var uglify = require('uglify-js');
var postcss = require('postcss');

processJS('src/js/alert-alert.js', 'dist/js/alert-alert.js');
processCSS('src/css/alert-alert.css', 'dist/css/alert-alert.css');

///////////////////////////////////////
// Build functions 

function processJS (inFile, outFile) {
    copyJS(inFile, outFile);
    minifyJS(inFile, minifyFilename(outFile));
}

function copyJS (inFile, outFile) {

    fs.copyAsync(inFile, outFile)
        .then(function () {
            console.log('File copied!');
        });

}

function minifyJS (inFile, outFile) {

    var outFileMap = outFile + '.map'

    var uglifiedJS = uglify.minify(inFile, {
        sourceRoot: inFile,
        outSourceMap: outFileMap,
    });

    saveFile(outFile, uglifiedJS.code, 'Uglified JS file saved.');
    saveFile(outFileMap, uglifiedJS.map, 'JS source map file saved.')

}

function processCSS (inFile, outFile) {

    var minifiedOutFile = minifyFilename(outFile);
    var processedCSS = null;
    var minifiedCSS = null;

    var cssProcesses = [
        require('postcss-nested'),
        require('postcss-simple-vars'),
        require('autoprefixer-core')({ browsers: ['last 2 versions'] }),
    ]

    var processedCSS = fs.readFileAsync(inFile)
        .then(function (css) {
            return postcss(cssProcesses).process(css);
        })
        .catch(console.log);

    processedCSS
        .then(function (result) {
            saveFile(outFile, result.css, 'Processed CSS file saved.');
        })
        .catch(console.log);

    processedCSS
        .then(function (css) {
            return postcss([require('cssnano')]).process(css, {
                from: outFile,
                to: minifiedOutFile,
                map: { inline: false },
            });
        })
        .then(function (result) {
            saveFile(minifiedOutFile, result.css, 'Minified CSS file saved.');
            if (result.map) {
                saveFile(minifiedOutFile + '.map', result.map, 'CSS source map file saved.');
            }
        })
        .catch(console.log);

}

function minifyFilename (filename) {
    /** 
     * Insert '.min' before the file extension
     */
    var dotIndex = filename.lastIndexOf('.');
    if (dotIndex === -1) {
        return filename + '.min';
    }
    return filename.slice(0, dotIndex) + '.min' + filename.slice(dotIndex);
}

function saveFile (file, contents, successMsg) {

    fs.writeFileAsync(file, contents)
        .then(function (err) {
            console.log(successMsg);
        })
        .catch(console.log);

}
