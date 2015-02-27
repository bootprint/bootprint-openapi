var Handlebars = require('handlebars');
var qfs = require("q-io/fs");
var Q = require("q");
var path = require("path");
var less = require("less");
var _ = require("lodash");
var map = require("map-values");
var deep = require("q-deep");
var helpers = require("./lib/handlebars-helper.js");

var baseLessFiles = [require.resolve("bootstrap/less/bootstrap.less"),
    require.resolve("atom-light-syntax/index.less"),
    require.resolve("./styles/baseTheme.less")];

/**
 * Returns a promise for partial-template-definition found in the base directory
 * @returns {*}
 */
function generatePartialsObj() {
    var partialDir = path.join(__dirname, "templates", "partials");
    return qfs.list(partialDir).then(function (partials) {
        // Create a structure { name, contents } for each partial in the partialdir
        return _(partials.map(function (partial) {
            return {
                name: path.basename(partial, ".hbs"),
                path: path.join(partialDir, partial)
            }
        })).indexBy("name").mapValues(_.property("path")).value();
    });
}

function Converter(userOptions) {
    var HtmlHandlebars = Handlebars.create();
    var ready = Q.defer();
    var options = null; // Resolved during ready-promise


    // Resolve partial-filenames to their contents
    generatePartialsObj().then(function(partials) {
        options = _.assign({
            partials: partials
        }, userOptions);
    }).then(function (partials) {
        return deep(map(options.partials, function (file) {
            return qfs.read(file);
        }));
    }).done(function (partials) {
        HtmlHandlebars.registerPartial(partials);
        HtmlHandlebars.registerHelper(helpers);
        ready.resolve(true);
    });

    /**
     * Generate html-output and store the result into the index.html-file in the specified target directory
     * @param swaggerJson
     * @param targetDir
     * @param options
     * @returns {*}
     */
    this.generateHtml = function (swaggerJson, targetDir) {
        var pageTemplateProm = qfs.read(require.resolve("./templates/page.hbs"));
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
                sourceMap: {sourceMapFileInline: true},
                paths: [
                    // Import paths
                    path.join(__dirname, "node_modules", "bootstrap", "less"),
                    path.join(__dirname, "node_modules", "atom-light-syntax", "styles")
                ],
                filename: "main.less", // Specify a filename, for better error messages
                compress: false
            });

        }).then(function (lessResult) {
            return Q.all([
                qfs.write(path.join(targetDir, "main.css"), lessResult.css),
                qfs.write(path.join(targetDir, "main.css.map"), lessResult.map)
            ]);
        });
    };

}

module.exports = function createConverter(options) {
    return new Converter(options);
};

