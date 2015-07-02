var path = require("path");

/**
 * Create a bootprint template-module that can be loaded via `Bootprint#load`.
 * @name index
 * @param {BootprintBuilder} builder the current bootprint builder
 * @return {BootprintBuilder} a bootprint-builder containing the template an Less settings for `bootprint-swagger`
 * @api public
 */
module.exports = function bootprintSwagger(builder) {
    return builder
        .load(require("bootprint-json-schema"))
        .merge({
            "handlebars": {
                "partials": path.join(__dirname, "handlebars/partials"),
                "helpers": require.resolve("./handlebars/helpers.js")
            },
            "less": {
                "main": [
                    require.resolve("./less/theme.less"),
                    require.resolve("./less/variables.less")
                ]
            },
            "preprocessor": require("./lib/preprocessor.js")
        });
};

// Add "package" to be used by bootprint-doc-generator
module.exports.package = require("./package");