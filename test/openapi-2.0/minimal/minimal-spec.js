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

describe('OpenAPI 2.0: The minimal spec', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, './swagger.yaml')
  before(bptest.run)

  const missingKeywords = [
    'definitions',
    'parameters',
    'responses',
    'securityDefinitions',
    'security',
    'externalDocs',
    'schemes-host-path'
  ]

  missingKeywords.forEach((keyword) => {
    it(`should not generate a link to the section "${keyword}" in the navigation`, function () {
      expect(bptest.$(`#openapi--header a[href="#${keyword}"]`).length).to.equal(0)
    })

    it(`should not contain the section "${keyword}"`, function () {
      expect(bptest.$(`#${keyword}`).length).to.equal(0)
    })
  })
})
