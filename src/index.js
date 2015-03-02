var Handlebars = require('handlebars');
var qfs = require("q-io/fs");
var Q = require("q");
var path = require("path");
var less = require("less");
var _ = require("lodash");
var deep = require("q-deep");
var debug = require("debug")("s2h");


function Converter(userOptions) {
    var HtmlHandlebars = Handlebars.create();
    var ready = Q.defer();
    var options = mergeOptions(userOptions);

    // Resolve partial-filenames to their contents
    deep(_.mapValues(options.partials, function (file) {
        return qfs.read(file);
    })).done(function (partials) {
        HtmlHandlebars.registerPartial(partials);
        HtmlHandlebars.registerHelper(options.helpers);
        ready.resolve(true);
    });

    /**
     * Generate html-output and store the result into the index.html-file in the specified target directory
     * @param swaggerJson
     * @param targetDir
     * @returns {*}
     */
    this.generateHtml = function (swaggerJson, targetDir) {
        debug("Generating HTML from %s",options.template);
        var pageTemplateProm = qfs.read(options.template);

        var targetDirProm = qfs.makeTree(targetDir);
        // When all is ready, do the work
        return Q.all([pageTemplateProm, targetDirProm, ready.promise]).spread(function (pageTemplateContents) {
            debug("...compiling pageTemplate");
            var pageTemplate = HtmlHandlebars.compile(pageTemplateContents);
            var targetFile = path.join(targetDir, "index.html");
            debug("...calling pageTemplate");
            var content = pageTemplate({
                body: swaggerJson
            });
            qfs.write(targetFile, content);
        }).catch(function (error) {
            console.log(error);
            throw error;
        });
    };

    /**
     * Generate css, with optional additional theme-less-file. From bootstrap less and atom-light-syntax less
     * @param targetDir
     * @returns {*}
     */
    this.generateCss = function (targetDir) {
        debug("Generating CSS");
        var targetDirProm = qfs.makeTree(targetDir);
        return Q.all([targetDirProm, ready.promise]).then(function () {
            var lessSource = options.less.main_files.map(function (file) {
                return '@import "' + file + '";'
            }).join("\n");
            return less.render(lessSource, {
                // sourceMap: {},
                paths: options.less.paths,
                filename: "main.less", // Specify a filename, for better error messages
                compress: true
            });

        }).then(function (lessResult) {
            return Q.all([
                qfs.write(path.join(targetDir, "main.css"), lessResult.css)
            ]);
        });
    };

}

module.exports = function createConverter(options) {
    return new Converter(options);
};

function mergeOptions(listOfOptions) {
    // Prepare arguments for "apply". First arg must be an empty object to prevent reuse of the default-config.js
    var args = _.flatten([{}, require("./default-config.js") ,listOfOptions, function(a, b) {
        if (_.isArray(a)) {
            return a.concat(b);
        }
    }]);
    debug(args);
    return _.merge.apply(this,args);
}

