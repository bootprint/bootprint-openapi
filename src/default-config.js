var path = require("path");
var fs = require("fs");
var _ = require("lodash");

/**
 * This module contains the default config (less-files,template, partials, helpers)
 * for swagger-to-html. See the README for details
 * @type {{partials: {object}, template: string, helpers: function[], less: {main_files: string[], paths: string[]}}}
 */
module.exports = {
    partials: {
        "swagger-to-html": path.join(__dirname,"..","templates","partials"),
        "json-schema": path.join(__dirname,"..","templates","partials-json-schema")
    },
    template: require.resolve("../templates/page.hbs"),
    helpers: require("./handlebars-helper.js"),
    less: {
        main_files: [
            require.resolve("bootstrap/less/bootstrap.less"),
            require.resolve("../styles/json-schema.less"),
            require.resolve("../styles/json-schema-labels.less"),
            require.resolve("../styles/swagger-to-html.less"),
            require.resolve("../styles/swagger-to-html-labels.less")
        ],
        paths: [
            path.resolve(__dirname, "..", "node_modules", "bootstrap", "less"),
            path.resolve(__dirname, "..", "node_modules", "highlight.js", "styles")
        ]
    },
    preprocessor: require("./preprocessor.js")
};

