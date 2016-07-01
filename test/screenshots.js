var fs = require('fs')
var path = require('path')
var Q = require('q')
var qfs = require('q-io/fs')
var Nightmare = require('nightmare')
var fileUrl = require('file-url')

qfs.makeTree('screenshots')
  .then(function () {
    return eachPromise(fs.readdirSync('test-output'), function (dir) {
      // Different width (using Bootstrap breakpoints)
      return eachPromise([400, 768, 992, 1200], function (width) {
        return screenshot(dir, width)
      })
    })
  })
  .done()

function screenshot (dir, width) {
  console.log('Capture', dir, width)
  var targetFile = path.join('test-output', dir, 'index.html')
  var screenshotFile = path.join('screenshots', dir + '-' + width + '.png')
  // Create screenshot  s in different screen sizes
  var nightmare = Nightmare({show: true})
  return nightmare
    .viewport(width, 1000)
    .goto(fileUrl(targetFile))
    .wait('body')
    .evaluate(function () {
      return {width: document.body.scrollWidth, height: document.body.scrollHeight}
    })
    .then(function (dim) {
      return nightmare.viewport(width, dim.height + 100)
        .screenshot(screenshotFile)
        .end()
    })
}

/**
 * Apply a callback to each element of an array.
 * The callback returns a promise and all the promises are resolved
 * one after another.
 * @param array
 * @param callback
 * @returns {*}
 */
function eachPromise (array, callback) {
  return array.reduce(function (lastPromise, item) {
    return lastPromise.then(function () {
      return callback(item)
    })
  }, Q())
}
