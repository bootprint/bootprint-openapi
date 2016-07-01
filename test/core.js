/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */
var qfs = require('q-io/fs')
var Q = require('q')
var cheerio = require('cheerio')
var path = require('path')
var Nightmare = require('nightmare')
var fileUrl = require('file-url')

/**
 * Run bootprint with a fixture and return a cheerio wrapper for the index.html
 * @param fixture
 * @param context the test context to store cheerio in
 * @returns {*}
 */
function runBootprint (swaggerDefinition, dir, context) {
  var targetDir = path.join('test-output', path.basename(dir))
  var targetFile = path.join(targetDir, 'index.html')
  return require('bootprint')
    .load(require('../'))
    .build(swaggerDefinition, targetDir)
    .generate()
    .then(function () {
      return qfs.read(targetFile)
    })
    .then(function (indexHtml) {
      context.$ = cheerio.load(indexHtml)
    })
    .then(function () {
      // Create screenshots in different screen sizes
      return Q.all([400, 768, 992, 1200].map(function (width) {
        var nightmare = Nightmare({show: false})
        return nightmare
          .viewport(width, 1000)
          .goto(fileUrl(targetFile))
          .wait('body')
          .evaluate(function () {
            return {width: document.body.scrollWidth, height: document.body.scrollHeight}
          })
          .then(function (dim) {
            return nightmare.viewport(width, dim.height + 100)
              .wait(1000)
              .screenshot(path.join(targetDir, 'image-' + width + '.png'))
              .end()
          })
          .then(function (result) {
            console.log(result)
          })
      }))
    })
}

module.exports = {
  run: runBootprint
}
