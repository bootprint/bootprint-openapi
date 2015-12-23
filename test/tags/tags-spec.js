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

describe('The tags fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('contains a tag-summary "Thingys" with a link to the operation "POST /thingy"', function () {
    var ref = context.$('#tag-Thingys').nextUntil('.swagger--summary-tag').find('a[href="#operation--thingy-post"]')
    expect(ref.html())
      .to.contain('POST /thingy')
  })

  it('contains a tag-summary "default" with a link to the operation "POST /notag"', function () {
    var ref = context.$('#tag-default').nextUntil('.swagger--summary-tag').find('a[href="#operation--notag-post"]')
    expect(ref.html())
      .to.contain('POST /notag')
  })

  it('should have that tag description converted to HTML', function () {
    var ref = context.$('#tag-pet').next('p')
    expect(ref.html()).to.contain('<strong>')
  })
})
