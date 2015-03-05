var chokidar = require("chokidar");
var _ = require("lodash");
var qfs = require("q-io/fs");

function notify() {
    console.log("Generated", arguments);
}

function watch(files, callback) {
    var watcher = chokidar.watch(files,{
        ignoreInitial: true
    });
    console.log("Watching ", files);
    var fn = function () {
        callback().done(notify);
    };
    fn = _.throttle(fn, 1000);
    watcher.on("ready", function() {
        console.log("Watchers for ",files," ready");
    });
    watcher.on("change", fn);
    watcher.on("add", fn);
    watcher.on("delete", fn);
}

module.exports = function (bootprint,swaggerFile,targetDir) {
    var options = bootprint.options;


    // Watch template partials and swagger file
    var htmlDependencies = _(options.partials).values().flatten().value();
    watch(htmlDependencies, function() {
        return qfs.read(swaggerFile).then(function(swaggerJson) {
            return bootprint.generateHtml(JSON.parse(swaggerJson),targetDir);
        });
    });





    // Watch less files and include paths
    var lessFiles = _.flatten([
            options.less.main_files,
            options.less.paths
    ]);
    watch(lessFiles, bootprint.generateCss.bind(bootprint,targetDir));

};