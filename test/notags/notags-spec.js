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

describe('The notags fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('should contain a summary without tags', function () {
    expect(context.$('#swagger--summary-no-tags').length).to.equal(1)
  })

  it('should not contain a tag-based summary', function () {
    expect(context.$('#swagger--summary-tags').length).to.equal(0)
  })

  it("should contain a summary item '/notag' linking to '#path--notag'", function () {
    expect(context.$(".swagger--summary-path a[href='#path--notag']").text()).to.equal('/notag')
  })
})
