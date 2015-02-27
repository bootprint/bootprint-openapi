#!/usr/bin/env node

//require('njstrace').inject();

var program = require('commander');
var qfs = require("q-io/fs");
var Q = require("q");
var Converter = require("../");

program.version(require("../package").version)
    .usage("[options] <swaggerfile> <targetdir>")
    .option('-f, --config-file <file>', 'Specify a config file for custom configurations')
    .option('-C, --no-css', 'Omit css generation')
    .parse(process.argv);


if (program.args.length<2) {
    program.help();
}





var configFile = program['config-file'];
var swaggerFile = program.args[0];
var targetDir = program.args[1];
var config = {};
if (configFile) {
    config = require(path.resolve(configFile));
}

var converter = new Converter(config);

qfs.read(swaggerFile).then(function(swaggerJson) {
    var cssReady;
    if (program.css) {
        cssReady = converter.generateCss(targetDir);
    } else {
        cssReady = Q();
    }
    var htmlReady = converter.generateHtml(JSON.parse(swaggerJson),targetDir);
    return Q.all([cssReady,htmlReady]);
}).done(function() {
    console.log("done");
});
