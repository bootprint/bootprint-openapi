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

describe('The global-params fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('should contain a global parameters definition for "p1"', function () {
    expect(context.$('#table-parameter-definitions').html()).to.contain('p1')
  })

  it('should contain a reference to "p1" in the POST-thingy operation', function () {
    expect(context.$('#operation--thingy-post').text()).to.contain('#/parameters/p1')
  })

  it('should contain the description text of global "p1" in the POST-thingy operation', function () {
    expect(context.$('#operation--thingy-post').text()).to.contain('This is a global parameter')
  })
})
