
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
var core = require('bootprint-unit-testing')(require('../..'), __dirname)

describe('The securityDefinitions fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require.resolve('./swagger.yaml'), context)
  })
  it('should have the securityDefinitions description converted to HTML', function () {
    expect(context.$('.security-property-type').html())
      .to.contain('<strong>')
  })
})
