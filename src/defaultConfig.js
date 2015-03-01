var path = require("path");
var fs = require("fs");
var _ = require("lodash");

/**
 * Returns a promise for partial-template-definition found in the base directory
 * @returns {*}
 */
function generatePartialsObj() {
    var partialDir = path.resolve(__dirname, "..","templates", "partials");
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
    theme: undefined
};


