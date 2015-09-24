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

describe('The body-without-consume fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('should contain a body (because a body-parameter is present, even though the consumes-property is missing', function () {
    expect(context.$('#operation--thingy-post .panel-body section.sw-request-body').html())
      .to.contain('Thingy')
  })
})
