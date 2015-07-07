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
        .then(function (bootprintConfig) {
            var partials = hbDocs(bootprintConfig.handlebars.partials);
            var template = hbDocs(bootprintConfig.handlebars.templates);

            var partialTree = createPartialTree(template[0], _.indexBy(partials, 'name'), []);
            console.log(partialTree);
            return _.merge({}, input, {
                partials: partials,
                template: template,
                partialTree: partialTree
            })
        })
}


var hbDocs = function (files) {
    return _.pairs(files).map(function (file) {
        var contents = file[1].contents;
        var filePath = file[1].path;
        var name = file[0].replace(/\.hbs$/, '');

        // Compute partials that are called from this file
        var children = [];
        var regex = /\{\{>(\S*)( .*?)?}}/g;
        var nextMatch;
        while ((nextMatch = regex.exec(contents)) !== null) {
            children.push(nextMatch[1]);
        }

        return {
            "name": name,
            "contents": contents,
            "path": filePath,
            "apidocs": apidocs(contents, {
                filename: filePath,
                filter: {
                    showWithoutApiTag: true
                }
            }),
            "children": children
        }

    });
};

/**
 * Generate a call hierarchy of the template and its partials
 * @param currentFile
 * @param partials
 */
function createPartialTree(currentFile, partials, visitedFiles) {
    if (visitedFiles[currentFile.name]) {
        return {
            name: '*' + currentFile.name + '*'
        }
    }
    visitedFiles[currentFile.name] = true;

    var result = {
        name: currentFile.name,
        href: '#'+currentFile.name // Anchors are generated in handlebars-partials.md.hbs (it's not nice to have these should change TODO)
    };
    if (currentFile.children.length>0) {
        _.merge(result,{
            children: currentFile.children.map(function(child) {
                return createPartialTree(partials[child], partials, visitedFiles);
            })
        });
    }
    return result
}


