// Load bootprint
// var bootprintConfig = require('bootprint').load(require('../'))._options
var _ = require('lodash')
var customize = require('customize')
var apidocs = require('multilang-apidocs')
var findPackage = require('find-package')
var path = require('path')

module.exports = function (input) {
  // Prepare partial apidocs and include them into the data object
  return customize()
    .registerEngine('handlebars', require('customize-engine-handlebars'))
    .registerEngine('less', {
      defaultConfig: {}, run: function () {}
    })
    .registerEngine('uglify', {
      defaultConfig: {}, run: function () {}
    })
    .registerEngine('preprocessor', {
      defaultConfig: {}, run: function () {}
    })
    .load(require('../'))
    .buildConfig()
    .then(function (bootprintConfig) {
      var partials = hbDocs(bootprintConfig.handlebars.partials)
      var template = hbDocs(bootprintConfig.handlebars.templates)

      var partialTree = createPartialTree(template[0], _.indexBy(partials, 'name'), [])
      return _.merge({}, input, {
        partials: partials,
        template: template,
        partialTree: partialTree
      })
    })
}

var hbDocs = function (files) {
  return _.pairs(files).map(function (file) {
    var contents = file[1].contents
    var filePath = file[1].path
    var name = file[0].replace(/\.hbs$/, '')

    // Compute partials that are called from this file
    var children = []
    var regex = /\{\{> *([^\s}]*)( .*?)?}}/g
    var nextMatch
    while ((nextMatch = regex.exec(contents)) !== null) {
      children.push(nextMatch[1])
    }

    return {
      'name': name,
      'contents': contents,
      'path': filePath,
      'package': findPackage(path.resolve(filePath)),
      'apidocs': apidocs(contents, {
        filename: filePath,
        filter: {
          showWithoutApiTag: true
        }
      }),
      'children': children
    }
  })
}

/**
 * Generate a call hierarchy of the template and its partials
 * @param currentFile
 * @param partials
 */
function createPartialTree (currentFile, partials, visitedFiles) {
  if (visitedFiles[currentFile.name]) {
    return {
      label: '*' + currentFile.name + '*',
      name: currentFile.name
    }
  }
  visitedFiles[currentFile.name] = true

  var result = {
    label: currentFile.name,
    name: currentFile.name,
    summary: _.trunc(chainOrUndefined(currentFile, 'apidocs', 0, 'parsed', 'description'), {
      separator: ' ',
      length: 50
    })
  }
  if (currentFile.children.length > 0) {
    _.merge(result, {
      children: currentFile.children.map(function (child) {
        return createPartialTree(partials[child], partials, visitedFiles)
      })
    })
  }
  return result
}

/**
 *
 * @param startObj
 * @param {(string|number)...} propertyChain a list of properties to resolve, as in `startobj.abc.0.cde`
 * @returns {*}
 */
function chainOrUndefined (startObj, propertyChain) {
  var result = startObj
  for (var i = 1; i < arguments.length; i++) {
    if (_.isUndefined(result)) {
      return undefined
    }
    result = result[arguments[i]]
  }
  return result
}
