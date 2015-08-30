var fs = require('fs');
var postcss = require('postcss');
 
var css = fs.readFileSync('src/index.css', 'utf8');

// process css 
var output = postcss(require('postcss-import'))
    .process(css, {
        // `from` option is required so relative import can work from input dirname 
        from: 'src/index.css'
    })
    .css;

fs.writeFile('demo/index.css', output);
