/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */
/* global describe */
/* global it */
/* global before */
var qfs = require('q-io/fs')
var cheerio = require('cheerio')
var path = require('path')
var expect = require('chai').expect

describe('The petstore example', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return runBootprint('petstore.json', context)
  })

  it("should contain 'Pet' as request body spec for /pet-POST", function () {
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
  this.timeout(10000)
  var context = {}
  before(function () {
    return runBootprint('preformatted-block.json', context)
  })

  it('should contain the whole description, even if multiple tags are generate by marked', function () {
    expect(context.$('#operation--foo-bar-get .panel-body .sw-operation-description pre').text())
      .to.contain('xxx')
  })

  it('should contain the whole summary, even if multiple tags are generate by marked', function () {
    expect(context.$('#operation--foo-bar-get .panel-heading .operation-summary pre').text())
      .to.contain('abc')
  })

  it('should strip the surrounding p-tag if this is the only top-level-tag marked creates', function () {
    expect(context.$('#operation--foo-bar2-get .panel-heading .operation-summary').html())
      .to.equal('Foo bar2')
  })
})

describe('The body-without-consume fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return runBootprint('body-without-consume.json', context)
  })

  it('should contain a body (because a body-parameter is present, even though the consumes-property is missing', function () {
    expect(context.$('#operation--thingy-post .panel-body section.sw-request-body').html())
      .to.contain('Thingy')
  })
})

describe('The missing-items fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return runBootprint('missing-items.json', context)
  })

  it('should contain a body (because a body-parameter is present, even though the consumes-property is missing', function () {
    expect(context.$('#operation--tagged_things-get > div.panel-body > section.sw-response-body > table > tbody > tr.sw-response-200').html())
      .to.contain('option1.blah')
  })
})

describe('The default-values fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return runBootprint('default-values.json', context)
  })

  var contentTypes = ['application/json', 'application/xml']
  contentTypes.forEach(function (contentType) {
    it('should contain a default value "' + contentType + '" for request content-types', function () {
      expect(context.$('#sw-default-consumes').html())
        .to.contain('application/xml')
    })
    it('should contain a default value "' + contentType + '" for response content-types', function () {
      expect(context.$('#sw-default-produces').html())
        .to.contain('application/xml')
    })
    it('the  "GET /foo/bar" operation should implicitly show "' + contentType + '" as response body', function () {
      expect(context.$('#operation--foo-bar-get section.sw-response-body').html()).to.contain(contentType)
    })
    it('the  "POST /foo/bar" operation should implicitly show "' + contentType + '" as request body', function () {
      expect(context.$('#operation--foo-bar-post section.sw-request-body').html()).to.contain(contentType)
    })
  })
})

describe('The global-responses fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return runBootprint('global-responses.json', context)
  })

  it('should contain a two global responses', function () {
    expect(context.$('#sw-global-responses > table >  tbody > tr ').length)
      .to.equal(2)
  })

  it('should contain a reference to the "bad_request" responses', function () {
    expect(context.$('#operation--tagged_things-get section.sw-response-body tr.sw-response-400 a').attr('href'))
      .to.equal('#/responses/bad_request')
  })
})

describe('The read-only-property fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return runBootprint('read-only-property.json', context)
  })

  it('should contain a reference the property "aPropertyName"', function () {
    expect(context.$('#definition-no-type').html())
      .to.contain('aPropertyName')
  })
})

describe('The definition-without-type fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return runBootprint('definition-without-type.json', context)
  })

  it('should contain a reference the property "aPropertyName"', function () {
    expect(context.$('#definition-no-type').html())
      .to.contain('aPropertyName')
  })
})

/**
 * Run bootprint with a fixture and return a cheerio wrapper for the index.html
 * @param fixture
 * @param context the test context to store cheerio in
 * @returns {*}
 */
function runBootprint (fixture, context) {
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
