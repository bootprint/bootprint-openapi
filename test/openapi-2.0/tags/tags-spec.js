/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* eslint-env mocha */
const expect = require('chai').expect
const tester = require('bootprint-unit-testing')

describe('OpenAPI 2.0: The tags spec', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, './swagger.yaml')
  before(bptest.run)

  it('should render the tags in the output', function () {
    expect(bptest.textIn('#tag-reading .header')).to.equal('reading')
    expect(bptest.textIn('#tag-reading .description')).to.equal('Operations that mostly read')
  })
})
