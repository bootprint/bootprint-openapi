/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* global describe */
/* global it */
/* global before */
var expect = require('chai').expect
var core = require('../core')

describe('The default-values fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
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
      expect(context.$('#operation--foo-bar-get .sw-responses').html()).to.contain(contentType)
    })
    it('the  "POST /foo/bar" operation should implicitly show "' + contentType + '" as request body', function () {
      expect(context.$('#operation--foo-bar-post .sw-request-body').html()).to.contain(contentType)
    })
  })
})
