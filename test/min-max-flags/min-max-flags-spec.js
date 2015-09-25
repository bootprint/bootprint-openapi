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

describe('The min-max-flags fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('should contain an exclusive min-max value for property "exclusive-interval"', function () {
    expect(context.$('dt[data-property-name="exclusive-interval"]').html())
      .to.contain('1 &lt; x &lt; 5')
  })

  it('should contain an inclusive min-max value for property "inclusive-interval"', function () {
    expect(context.$('dt[data-property-name="inclusive-interval"]').html())
      .to.contain('1 &#x2264; x &#x2264; 5')
  })

  it('should contain an inclusive string-length limits for property "limited-string"', function () {
    expect(context.$('dt[data-property-name="limited-string"]').html())
      .to.contain('(1 to 64 chars)')
  })
})
