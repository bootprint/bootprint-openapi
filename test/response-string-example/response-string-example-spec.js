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
var core = require('bootprint-unit-testing')(require('../..'), __dirname)

describe('The response string-examples fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require.resolve('./swagger.yaml'), context)
  })
  it('should render the response examples', function () {
    expect(context.$('dd.sw-response-200 .sw-response-examples').text(),
      'Examples consisting of only a string should not be JSON.stringified').not.to.match(/\\n/)
  })
})
