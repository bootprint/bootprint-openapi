/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* global describe */
/* global it */
// /* global before */

var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

var expect = chai.expect

var core = require('../core')

describe('The undefined-response-ref fixture', function () {
  this.timeout(10000)
  var context = {}

  it('should fail to be built with bootprint-swagger', function () {
    return expect(core.run(require('./swagger.json'), __dirname, context)).to.be.rejected
  })
})
