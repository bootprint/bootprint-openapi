var path = require("path");
var fs = require("fs");
var _ = require("lodash");

/**
 * Returns a promise for partial-template-definition found in the base directory
 * @returns {*}
 */
function generatePartialsObj() {
    var partialDir = path.resolve(__dirname, "..", "templates", "partials");
    var partials = fs.readdirSync(partialDir);

    // Create a structure { name, contents } for each partial in the partialdir
    return _(partials.map(function (partial) {
        return {
            name: path.basename(partial, ".hbs"),
            path: path.join(partialDir, partial)
        }
    })).indexBy("name").mapValues(_.property("path")).value();

}



module.exports = {
    partials: generatePartialsObj(),
    template: require.resolve("../templates/page.hbs"),
    helpers: require("./handlebars-helper.js"),
    less: {
        main_files: [
            require.resolve("bootstrap/less/bootstrap.less"),
            require.resolve("atom-light-syntax/index.less"),
            require.resolve("../styles/base-theme.less")
        ],
        paths: [
            path.resolve(__dirname, "..", "node_modules", "bootstrap", "less"),
            path.resolve(__dirname, "..", "node_modules", "atom-light-syntax", "styles")
        ]
    }
};

