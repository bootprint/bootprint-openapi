var path = require("path");
var fs = require("fs");
var _ = require("lodash");





module.exports = {
    partials: {
        "swagger-to-html": [ path.join(__dirname,"..","templates","partials") ]
    },
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

