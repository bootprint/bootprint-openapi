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
var tester = require('bootprint-unit-testing')

describe('The all-of fixture', function () {
  this.timeout(10000)

  var bptest = tester(require('../..'), __dirname, require('./swagger.json'))
  before(bptest.run)

  it('should have an inheritance block for definition AAA', function () {
    expect(bptest.$('#definition-AAA').text())
      .to.contain('BBB')
  })

  it('should have an inheritance block for definition BBB', function () {
    expect(bptest.$('#definition-BBB').text())
      .to.contain('CCC')
  })
})
