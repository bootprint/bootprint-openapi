var Handlebars = require('handlebars');
var qfs = require("q-io/fs");
var Q = require("q");
var path = require("path");
var less = require("less");
var _ = require("lodash");
var deep = require("q-deep");
var debug = require("debug")("bootprint");
var loadPartials = require("./read-partials.js");

function Converter(options) {




    /**
     * Generate html-output and store the result into the index.html-file in the specified target directory
     * @param swaggerJson
     * @param targetDir
     * @returns {*}
     */
    this.generateHtml = function (swaggerJson, targetDir) {
        debug("Generating HTML from %s",options.template);
        var pageTemplateP = qfs.read(options.template);
        var targetDirP = qfs.makeTree(targetDir);
        var handleBarsP = loadPartials(options.partials).then(function(partials) {
            debug("Partials loaded");
            var hbs = Handlebars.create();
            hbs.logger.level = 0;
            hbs.registerHelper(options.helpers);
            hbs.registerPartial(partials);
            debug("Partials registered");
            return hbs
        });


        // When all is ready, do the work
        return Q.all([pageTemplateP, handleBarsP, targetDirP ]).spread(function (pageTemplateContents, HtmlHandlebars) {
            debug("compiling pageTemplate");
            var pageTemplate = HtmlHandlebars.compile(pageTemplateContents, {
                trackIds: true
            });
            var targetFile = path.join(targetDir, "index.html");
            debug("...calling pageTemplate");
            var content = pageTemplate({
                body: swaggerJson
            });
            debug("html created");
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
        return Q.all([targetDirProm]).then(function () {
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


    /**
     * Watch for file changes and perform appropriate build steps
     */
    this.watch = function () {
        var chokidar = require("chokidar");

        var partialFiles =_(options.partials).values().flatten().value();
        debug("Partial-files to watch: %o",partialFiles);
        var templateWatcher = chokidar.watch(partialFiles);
        templateWatcher.on("chnange",console.log)

    }
}

module.exports = Converter;


