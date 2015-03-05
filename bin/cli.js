#!/usr/bin/env node

var program = require('commander');
var qfs = require("q-io/fs");
var Q = require("q");
var debug = require("debug")("bootprint");

debug("Loading 'commander'");
program.version(require("../package").version)
    .usage("[options] <swaggerfile> <targetdir>")
    .description("Convert a swagger-definition file into a static html-page.")
    .option('-f, --config-file <file>', 'Specify a config file for custom configurations')
    .option('-C, --no-css', 'Omit css generation')
    .option('-d, --development-mode', 'Turn on file-watcher, less source maps and http-server with live-reload')
    .parse(process.argv);
debug("done");


if (program.args.length<2) {
    program.help();
}



var configFile = program['config-file'];
var swaggerFile = program.args[0];
var targetDir = program.args[1];
var options = {};
if (configFile) {
    options = require(path.resolve(configFile));
}
debug("loading swagger-to-html");
var bootprint = require("../src/swagger-to-html.js");
debug("swagger-to-html loaded");

options.developmentMode = program["developmentMode"];

var converter = bootprint(options);

qfs.read(swaggerFile).then(function(swaggerJson) {
    var cssReady = program['css'] ? converter.generateCss(targetDir) : Q();
    var htmlReady = converter.generateHtml(JSON.parse(swaggerJson),targetDir);
    return Q.all([cssReady,htmlReady]);
}).done(function() {
    console.log("done");
});


if (options.developmentMode) {
    require("../src/developmentMode.js")(converter,swaggerFile,targetDir);
}
