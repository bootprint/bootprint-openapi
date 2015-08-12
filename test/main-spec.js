/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */
/* global describe */
/* global it */
/* global beforeAll */
var qfs = require('q-io/fs')
var cheerio = require('cheerio')
var path = require('path')
var expect = require("chai").expect;

describe('The petstore example', function () {
  var context = {}
  before(function () {
    return runBootprint('petstore.json',context)
  })

  it("should contain 'Pet' as request body spec for /pet-POST", function () {
    console.log()
    expect(context.$('#operation--pet-post div.sw-request-model a.json-schema-ref').text())
      .to.equal('Pet')
  })

  it("should contain an summary item '/pet' linking to '#path--pet'", function () {
    expect(context.$(".swagger--summary-path a[href='#path--pet']").text()).to.equal('/pet')
  })

  it("should contain an path item '/pet' with id 'path--pet'", function () {
    expect(context.$('#path--pet').length).to.equal(1)
  })
})

describe('The preformatted fixture', function () {
  var context = {}
  before(function () {
    return runBootprint('preformatted-block.json',context)
  })

  it("should contain the whole description, even if multiple tags are generate by marked", function () {
    expect(context.$('#operation--foo-bar-get .panel-body .sw-operation-description pre').text())
      .to.contain('xxx')
  })

  it("should contain the whole summary, even if multiple tags are generate by marked", function () {
    expect(context.$('#operation--foo-bar-get .panel-heading .operation-summary pre').text())
      .to.contain('abc')
  })

  it("should strip the surrounding p-tag if this is the only top-level-tag marked creates", function () {
    expect(context.$('#operation--foo-bar2-get .panel-heading .operation-summary').html())
      .to.equal('Foo bar2')
  })

})
/**
 * Run bootprint with a fixture and return a cheerio wrapper for the index.html
 * @param fixture
 * @param context the test context to store cheerio in
 * @returns {*}
 */
function runBootprint (fixture,context) {
  var targetDir = path.join('test-output', fixture)
  return require('bootprint')
    .load(require('../'))
    .build(path.join('test/fixtures', fixture), targetDir)
    .generate()
    .then(function () {
      return qfs.read(path.join(targetDir, 'index.html'))
    })
    .then(function (indexHtml) {
      context.$ = cheerio.load(indexHtml)
    })
}
