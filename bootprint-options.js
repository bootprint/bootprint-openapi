var path = require("path");

/**
 * This function is called by bootprint and a configuration-builder is passed in.
 * A new builder is created using the configuration of the old one as default values
 * that are overridden by values for this module.
 * @param builder
 * @returns {*}
 */
module.exports = function (builder) {
    return builder
        .load(require("bootprint-json-schema"))
        .merge({
            "template": require.resolve("./template/template.hbs"),
            "partials": path.join(__dirname, "template/"),
            "helpers": {},
            "less": {
                "main": [
                    require.resolve("./less/theme.less"),
                    require.resolve("./less/api.less")
                ]
            }
        });
};