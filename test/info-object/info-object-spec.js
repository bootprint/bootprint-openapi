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

describe('The info object should', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('cause to render a title in <h1>.', function () {
    expect(context.$('div.container > h1').html()).to.contain('API title')
  })

  it('cause to render the API version.', function () {
    expect(context.$('p.sw-info').text()).to.contain('Version:')
    expect(context.$('p.sw-info > span.sw-info-version').text()).to.contain('1.0.0')
  })

  it('cause to render the Base URL.', function () {
    expect(context.$('p.sw-info').text()).to.contain('Base URL:')
    expect(context.$('p.sw-info > span.sw-info-basePath').text()).to.contain('/v1')
  })

  it('cause to render a description.', function () {
    expect(context.$('p.sw-info + p + p').html()).to.contain('Description is present.')
  })
})
