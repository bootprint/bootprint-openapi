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

describe('The path-parameters fixture', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('should not contain a a "path_parameter" operation in the summary', function () {
    expect(context.$('.swagger--summary').html()).not.to.contain('PARAMETERS')
  })

  it('should not contain a "pathParmeter" operation', function () {
    expect(context.$('#operation--pets-parameters').length).to.equal(0)
  })
  it('not have a "path_parameter" in the "get" operation', function () {
    expect(context.$('#operation--pets-get').html()).to.contain('path_parameter')
  })

  it('not have a "path_parameter" in the post operation', function () {
    expect(context.$('#operation--pets-post').html()).to.contain('path_parameter')
  })
})
