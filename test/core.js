/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */
var qfs = require('m-io/fs')
var cheerio = require('cheerio')
var path = require('path')
var Nightmare = require('nightmare')
var fileurl = require('file-url')
var nightmare = Nightmare({show: false})

process.on('exit', () => {
  nightmare
    .end()
    .then(() => console.log('nightmare done'))
})

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
      return nightmare
        .goto(fileurl(path.join(targetDir, 'index.html')))
        .viewport(400, 1200)
        .wait(500)
        .screenshot(path.join(targetDir, 'index-400.png'))
        .viewport(800, 1200)
        .wait(500)
        .screenshot(path.join(targetDir, 'index-800.png'))
        .viewport(1200, 1200)
        .wait(500)
        .screenshot(path.join(targetDir, 'index-1200.png'))
    })
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
