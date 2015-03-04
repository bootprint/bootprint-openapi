var qfs = require("q-io/fs");
var path = require("path");
var deep = require("q-deep");
var _ = require("lodash");
var debug = require("debug")("bootprint:partials");

var partial = "templates/partials";
var prefix = "abc";
var Q = require("q");


/**
 * Read the files in a directory tree and return the relativ paths based on the directory
 * @param dir
 * @returns {Object} an object containing the partial name as key and the file-path as value
 */
function filesInTree(name, dir) {
    return qfs.listTree(dir, function (file, stat) {
        return stat.isFile() && path.extname(file) === ".hbs";
    }).invoke("map", function (file) {
        return {
            name: name + "/" + path.relative(dir, file).replace(/\.hbs$/, "").replace(/\\/g, "/"),
            value: file
        };
    });
}

/**
 * Returns a mapping for a single partial file or mappings for all files in a directory.
 * @param name
 * @param dir
 */
function fileOrFilesInTree(name, dir) {
    return qfs.isDirectory(dir).then(function (isDirectory) {
        debug("is-directory: ",isDirectory);
        if (isDirectory) {
            return filesInTree(name, dir);
        } else {
            return Q([
                {
                    name: name,
                    value: dir
                }
            ]);

        }

    });

}

/**
 * Returns a merged object partial-name -> partial-file for a list of partial directories.
 * Partials that appear in a directory later in the list overried previous ones.
 * @param name
 * @param partialDirs
 * @returns {*}
 */
function partialFiles(name, partialDirs) {
    debug("partialfiles", name,partialDirs);
    return partialDirs.reduce(function (subResult, current) {
        // Partials as { name: value, ...} object
        var partials = fileOrFilesInTree(name, current).then(function (nameToFile) {
            return _(nameToFile).indexBy("name").mapValues(_.property("value")).value();
        })
        return deep([subResult, partials]).then(function (args) {
            debug("Partial result ", args);
            return _.merge(args[0], args[1]);
        });
    }, Q({}));
}

/**
 * Read the contents of partials from multiple specified directories
 * @param name
 * @param partialDirs
 * @returns {*}
 */
function readPartials(name, partialDirs) {
    return partialFiles(name, partialDirs).then(function (partialFiles) {
        return deep(_.mapValues(partialFiles, function (file) {
            debug("reading ",file);
            return qfs.read(file);
        }));
    });
}

/**
 *
 * @param partialsConfig {Object<String,Array<String>>} the partial configuration. Multiple directories
 * or files for each name.
 *
 */
function loadPartials(partialsConfig) {
    debug("loadPartials", partialsConfig);
    var partialDefsP = _.pairs(partialsConfig).map(function(pair) {

        return readPartials(pair[0],pair[1]);
    });
    return deep(partialDefsP).then(function(partialDefs) {
        var result = _.merge.apply(_,partialDefs);
        debug("loadPartials -> ",result);
        return result;
    });
}


module.exports = loadPartials;