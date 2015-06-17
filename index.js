var path = require("path");

// Export function to create new config (builder is passed in from outside)
module.exports = function (builder) {
    return builder
        .load(require("bootprint-json-schema"))
        .merge({
            "preprocessor": require("./lib/preprocessor.js"),
            "partials": path.join(__dirname, "handlebars/partials"),
            "helpers": require.resolve("./handlebars/helpers.js"),
            "less": {
                "main": [
                    require.resolve("./less/theme.less"),
                    require.resolve("./less/variables.less")
                ]
            }
        });
};

// Add "package" to be used by bootprint-doc-generator
module.exports.package = require("./package");