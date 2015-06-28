var path = require("path");

// Export function to create new config (builder is passed in from outside)
module.exports = function (builder) {
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