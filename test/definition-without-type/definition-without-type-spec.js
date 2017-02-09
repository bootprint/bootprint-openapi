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

describe('The definition-without-type fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), context)
  })

  it('should contain a reference the property "aPropertyName"', function () {
    expect(context.$('#definition-no-type').html())
      .to.contain('aPropertyName')
  })
})
