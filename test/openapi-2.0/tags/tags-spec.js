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

  it('should render the name of the tag', function () {
    expect(bptest.textIn('#tag-reading .header')).to.equal('reading')
  })

  it('should render the description of the tag', function () {
    expect(bptest.textIn('#tag-reading .description')).to.equal('Operations that mostly read')
  })

  it('should render the paths and operations of the tag', function () {
    expect(bptest.textIn('#tag-reading .openapi--summary')).to.equal('Path Method Description /dogs POST Add a dog /users GET Get users')
  })

  it(`should contain a section with untagged operations`, function () {
    expect(bptest.textIn(`#untaggedOperations .header`)).to.equal('Operations without tag')
  })

  it('should render the path-summary for untagged operations', function () {
    expect(bptest.textIn('#untaggedOperations .openapi--summary')).to.equal('Path Method Description /dogs GET Get dogs')
  })
})
