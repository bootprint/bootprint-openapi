/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */
var qfs = require('m-io/fs')
var cheerio = require('cheerio')
var path = require('path')

/**
 * Run bootprint with a fixture and return a cheerio wrapper for the index.html
 * @param fixture
 * @param context the test context to store cheerio in
 * @returns {*}
 */
function runBootprint (swaggerDefinition, dir, context) {
  var targetDir = path.join('test-output', path.basename(dir))
  return require('bootprint')
    .load(require('../'))
    .build(swaggerDefinition, targetDir)
    .generate()
    .then(function () {
      return qfs.read(path.join(targetDir, 'index.html'))
    })
    .then(function (indexHtml) {
      context.$ = cheerio.load(indexHtml)
    })
}

module.exports = {
  run: runBootprint
}
