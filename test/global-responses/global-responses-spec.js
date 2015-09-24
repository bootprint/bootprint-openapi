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

describe('The global-responses fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('should contain a two global responses', function () {
    expect(context.$('#sw-response-definitions > dt').length)
      .to.equal(2)
  })

  it('should contain a reference to the "bad_request" responses', function () {
    expect(context.$('#operation--tagged_things-get section.sw-responses dt.sw-response-400 a').attr('href'))
      .to.equal('#/responses/bad_request')
  })
})
