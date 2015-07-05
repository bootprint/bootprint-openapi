// Load bootprint
//var bootprintConfig = require('bootprint').load(require('../'))._options;
var _ = require("lodash");
var customize = require("customize");
var io = require("customize/helpers-io");
var apidocs = require("multilang-apidocs");

module.exports = function (input) {
    // Prepare partial apidocs and include them into the data object
    return customize()
        .registerEngine("handlebars", require("customize-engine-handlebars"))
        .registerEngine("less", {
            defaultConfig: {}, run: function () {
            }
        })
        .registerEngine("preprocessor", {
            defaultConfig: {}, run: function () {
            }
        })
        .load(require("../"))
        .build()
        .then(function (result) {
            var result = _.pairs(result.handlebars.partials).map(function (partial) {
                var contents = partial[1].contents;
                var filePath = partial[1].path;
                var name = partial[0].replace(/\.hbs$/, '');
                return {
                    "partialName": name,
                    "contents": contents,
                    "path": filePath,
                    "apidocs": apidocs(contents, {
                        filename: filePath,
                        defaults: {
                            name: name,
                        },
                        filter: {
                            showWithoutApiTag: true
                        }
                    })
                }

            });
            return result;
        })
        .then(function (result) {
            return _.merge({}, input, {
                // This is the actual helper function
                partials: result
            });
        })

}



