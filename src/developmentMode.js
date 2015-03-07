// This module is called when the development mode is activated
// It is responsible for starting the watcher and live-server

var chokidar = require("chokidar");
var _ = require("lodash");
var qfs = require("q-io/fs");
var Q = require("q");
var deep = require("q-deep");

function notify() {
    console.log("Generated", arguments);
}

function isDirectory(file) {
    return qfs.isDirectory(file);
}

function watch(files, callback, chokOptions) {
    // Distinct variable to prevent wrong parens in the next call
    var mergedOptions = _.merge({ ignoreInitial: true }, chokOptions);

    var watcher = chokidar.watch(files, mergedOptions);

    console.log("Watching ", files, mergedOptions);
    var fn = function () {
        callback().catch(console.log).done(notify);
    };
    fn = _.throttle(fn, 1000);
    watcher.on("ready", function () {
        console.log("Watchers for ", files, " ready");
    });
    watcher.on("change", fn).on("add", fn).on("delete", fn);
}

/**
 *
 * @param files
 * @param callback
 * @param chokOptions addition options for chokidar
 */
function watchFilesOrDirs(files, callback, chokOptions) {
    console.log("file", files);
    // Divide files into "real" files and directories
    var groupsP = files.reduce(function (subresult, file) {
        return Q.all([subresult, qfs.isDirectory(file)]).spread(function (subresult, isDirectory) {
            if (isDirectory) {
                subresult.dirs.push(file)
            } else {
                subresult.files.push(file);
            }
            return subresult;
        });

    }, Q({files: [], dirs: []}));

    deep(groupsP).done(function (groups) {
        // Files must be watched with polling in order to solve problems with "atomic writes"
        watch(groups.files, callback, _.merge({
            usePolling: true
        }, chokOptions));

        // Directories work well, even with "atomic writes"
        watch(groups.dirs, callback, chokOptions);

    });

}

module.exports = function (bootprint, swaggerFile, targetDir) {
    var options = bootprint.options;

    // Watch partial templates and swagger file
    var htmlDependencies = _.union(
        _.flatten(_.values(options.partials)),
        [swaggerFile]
    );
    watchFilesOrDirs(htmlDependencies, function () {
        // swaggerFile must be read every time, since it is also on the watch-list
        return qfs.read(swaggerFile).catch(console.log).then(function (swaggerJson) {
            return bootprint.generateHtml(JSON.parse(swaggerJson), targetDir);
        });
    });

    // Watch less files and include paths
    var lessFiles = _.flatten([
        options.less.main_files,
        options.less.paths
    ]);
    watchFilesOrDirs(lessFiles, function () {
        return bootprint.generateCss(targetDir);
    });

    var liveServer = require("live-server");

    var params = {
        port: 8181,
        host: "0.0.0.0",
        root: targetDir,
        noBrowser: true

    };
    liveServer.start(params);

};