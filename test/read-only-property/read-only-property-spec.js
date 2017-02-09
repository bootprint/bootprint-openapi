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

describe('The read-only-property fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), context)
  })

  it('should contain a read-only badge in its request model', function () {
    expect(context.$('#operation--things--post .json-property-read-only').length)
      .to.equal(1)
  })
})
