var qfs = require('m-io/fs')
var deep = require('deep-aplus')(require('q').Promise)
var path = require('path')
var _ = require('lodash')

module.exports = {
  /**
   * Collect all credit-files concatenated them
   * and as a list return them
   *
   * @param {engine: Handlebars, config: object} customizeOptions
   * @returns {*}
   */
  credits: function (options, customizeOptions) {
    return qfs.listTree('.', function (filePath) {
      var file = path.basename(filePath)
      // Do not traverse into the node_modules directory
      if (file === 'node_modules' || file === '.git') {
        return null
      }
      // Collect all files "credits.md"
      if (file === 'credits.md.hbs') {
        return true
      }
      return false
    }).then(function (creditFiles) {
      return deep(creditFiles.map(function (creditFile) {
        console.log(creditFile)
        var input = _.merge({}, this, {
          __dirname: path.dirname(creditFile),
          __filename: creditFile
        })
        return qfs.read(creditFile).then(function (contents) {
          return customizeOptions.engine.compile(contents)(input)
        })
      }))
    })
  }
}
