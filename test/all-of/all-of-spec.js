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

describe('The all-of fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('should have an inheritance block for definition AAA', function () {
    expect(context.$('#definition-AAA').text())
      .to.contain('BBB')
  })

  it('should have an inheritance block for definition BBB', function () {
    expect(context.$('#definition-BBB').text())
      .to.contain('CCC')
  })
})
