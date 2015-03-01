var Handlebars = require('handlebars');
var qfs = require("q-io/fs");
var Q = require("q");
var path = require("path");
var less = require("less");
var _ = require("lodash");
var deep = require("q-deep");

var baseLessFiles = [require.resolve("bootstrap/less/bootstrap.less"),
    require.resolve("atom-light-syntax/index.less"),
    require.resolve("../styles/baseTheme.less")];

function Converter(userOptions) {
    var HtmlHandlebars = Handlebars.create();
    var ready = Q.defer();
    var options = _.merge(require("./defaultConfig.js"), userOptions);

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
        var pageTemplateProm = qfs.read(options.template);
        var targetDirProm = qfs.makeTree(targetDir);
        // When all is ready, do the work
        return Q.all([pageTemplateProm, targetDirProm, ready.promise]).spread(function (pageTemplateContents) {
            var pageTemplate = HtmlHandlebars.compile(pageTemplateContents);
            var targetFile = path.join(targetDir, "index.html");
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
        var targetDirProm = qfs.makeTree(targetDir);
        return Q.all([targetDirProm, ready.promise]).then(function () {
            var lessFiles = baseLessFiles.slice(); //Copy
            if (options.theme) {
                lessFiles.push(options.theme);
            }

            var lessSource = lessFiles.map(function (file) {
                return '@import "' + file + '";'
            }).join("\n");
            return less.render(lessSource, {
                // sourceMap: {},
                paths: [
                    // Import paths
                    path.resolve(__dirname, "..", "node_modules", "bootstrap", "less"),
                    path.resolve(__dirname, "..", "node_modules", "atom-light-syntax", "styles")
                ],
                filename: "main.less", // Specify a filename, for better error messages
                compress: true
            });

        }).then(function (lessResult) {
            return Q.all([
                qfs.write(path.join(targetDir, "main.css"), lessResult.css)
                // ,qfs.write(path.join(targetDir, "main.css.map"), lessResult.map)
            ]);
        });
    };

}

module.exports = function createConverter(options) {
    return new Converter(options);
};

