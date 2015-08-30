var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs-extra'));

exports.minifyFilename = function (filename) {
    /** 
     * Insert '.min' before the file extension in a filename.
     */

    var dotIndex = filename.lastIndexOf('.');

    if (dotIndex === -1) {
        return filename + '.min';
    }

    return filename.slice(0, dotIndex) + '.min' + filename.slice(dotIndex);

}

exports.saveFile = function (file, contents, successMsg) {
    /**
     * Utility functions - wrap fs.writeFile with a callback that
     * logs a success message.
     */

    fs.writeFileAsync(file, contents)
        .then(function (err) {
            console.log(successMsg);
        })
        .catch(console.log);

}
