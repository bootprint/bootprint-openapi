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
    var watcher = chokidar.watch(files, _.merge({
        ignoreInitial: true
    }), chokOptions);
    console.log("Watching ", files, chokOptions);
    var fn = function () {
        callback().catch(console.log).done(notify);
    };
    fn = _.throttle(fn, 1000);
    watcher.on("ready", function () {
        console.log("Watchers for ", files, " ready");
    });
    watcher.on("change", fn);
    watcher.on("add", fn);
    watcher.on("delete", fn);
}

/**
 *
 * @param files
 * @param callback
 * @param chokOptions addition options for chokidar
 */
function watchFilesOrDirs(files, callback, chokOptions) {
    console.log("file",files);
    // Divide files into "real" files and directories
    var groupsP = files.reduce(function(subresult, file) {
        return Q.all([subresult, qfs.isDirectory(file)]).spread(function(subresult, isDirectory) {

            if (isDirectory) {
                subresult.dirs.push(file)
            } else {
                subresult.files.push(file);
            }
            return subresult;
        });

    },Q({ files: [], dirs: []}));

    deep(groupsP).done(function(groups) {
        // Files must be watched with polling in order to solve problems with "atomic writes"
        watch(groups.files, callback, _.merge({
            usePolling: true
        },chokOptions));

        // Directories work well, even with "atomic writes"
        watch(groups.files, callback, chokOptions);

    });


}

module.exports = function (bootprint, swaggerFile, targetDir) {
    var options = bootprint.options;



    // Watch partial templates and swagger file
    var htmlDependencies = _.union(
        _.flatten(_.values(options.partials)),
        [swaggerFile]
    );
    console.log("swaggerfile",htmlDependencies);
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
    watchFilesOrDirs(lessFiles,function() {
        return bootprint.generateCss();
    });

};