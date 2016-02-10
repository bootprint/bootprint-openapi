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

describe('The response-examples fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require.resolve('./swagger.yaml'), __dirname, context)
  })
  it('should render tables inside markdown with borders', function () {
    expect(context.$('table').first().attr('class')).to.equal('table table-bordered')
  })
})
