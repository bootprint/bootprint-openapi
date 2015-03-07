var _ = require("lodash");
var Converter = require("./bootprint.js");
var debug = require("debug")("bootprint");

/**
 * Builder for creating a converter with multiple overriding options-objects.
 * @param options
 * @constructor
 */
function Builder(options) {
    // Initial _options is empty. "this.override" is called at the bottom of the function
    // "options"-param must not be mutated.
    // Field visible for test-cases
    this._options = {};

    /**
     * Override the values of the current config with another config.
     * Values of the other configuration override values of the
     * current configuration, if specified.
     * Array values of the other configuration are concatenated to
     * the values of the current config.
     * @param additionalOptions {object} a plain js object containing configuration values.
     */
    this.override = function (additionalOptions) {
        var copy = _.clone(additionalOptions,true);
        if (copy.partials) {
            // Make sure that partials always contains arrays of paths
            copy.partials = _.mapValues(copy.partials, function(value) {
                return _.isArray(value) ? value : [value];
            });
        }
        debug("Adding config: %o", copy);
        _.merge(this._options, copy, function (a, b) {
            if (_.isArray(a)) {
                return a.concat(b);
            }
        });
        return this;
    };

    this.override(options);

    /**
     * Build the configured converter
     */
    this.build = function () {
        debug("Building converter with config: %o", this._options);
        return new Converter(this._options);
    }


}

module.exports = function (options) {
    return new Builder(options);
};