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

    // Visible field with actual options needed by developmentMode
    this.options = options;



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
            debug("targetdir: ",targetDir);
            var targetFile = path.join(targetDir, "index.html");
            debug("...calling pageTemplate");
            var content = pageTemplate({
                body: swaggerJson
            });
            debug("html created");
            return qfs.write(targetFile, content).then(function() {
                return targetFile;
            });
        });
    };

    /**
     * Generate css, with optional additional theme-less-file. From bootstrap less and atom-light-syntax less
     * @param targetDir
     * @returns {*}
     */
    this.generateCss = function (targetDir) {
        debug("Generating CSS");
        var mainCss = path.join(targetDir, "main.css");
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
                qfs.write(mainCss, lessResult.css)
            ]);
        }).then(function() {
            return mainCss;
        });
    };

}

module.exports = Converter;


