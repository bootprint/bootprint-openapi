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

describe('The preformatted-block fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('should contain the whole description, even if multiple tags are generate by marked', function () {
    expect(context.$('#operation--foo-bar-get .panel-body .sw-operation-description pre').text())
      .to.contain('xxx')
  })

  it('should contain the whole summary, even if multiple tags are generate by marked', function () {
    expect(context.$('#operation--foo-bar-get .panel-heading .operation-summary pre').text())
      .to.contain('abc')
  })

  it('should strip the surrounding p-tag if this is the only top-level-tag marked creates', function () {
    expect(context.$('#operation--foo-bar2-get .panel-heading .operation-summary').html())
      .to.equal('Foo bar2')
  })
})
