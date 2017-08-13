/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* global describe */
/* global it */
/* global before */
const expect = require('chai').expect
const tester = require('bootprint-unit-testing')

describe('OpenAPI 2.0: The implicit-tags spec', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, './swagger.yaml')
  before(bptest.run)

  it(`should contain a link to the section "tags" in the navigation with label "tags"`, function () {
    expect(bptest.textIn(`#openapi--header a[href="#tags"]`)).to.equal('Tags')
  })

  it(`should contain the section "tags" with label "Tags"`, function () {
    expect(bptest.textIn(`#tags`)).to.equal('Tags')
  })
})
