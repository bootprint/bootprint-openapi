var config = require("./default-config.js");
var builder = require("./builder.js");

/**
 * Returns a converter configured with default options for swagger-to-html
 * @param options
 */
module.exports = function(options) {
    return builder(config).override(options).build();
};
