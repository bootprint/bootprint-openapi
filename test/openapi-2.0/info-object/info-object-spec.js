/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* eslint-env mocha */
const expect = require('chai').expect
const tester = require('bootprint-unit-testing')

describe('OpenAPI 2.0: The info-obejct spec', function () {
  const bptest = tester(require('../../..'), __dirname, './swagger.yaml')
  before(bptest.run)

  it('should')
})
