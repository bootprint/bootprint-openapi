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

describe('externalDocs', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('schema should contain an external document link to swagger.io', function () {
    var $a = context.$('.sw-info a.sw-external-doc')

    expect($a.text()).to.equal('Find out more about Swagger')
    expect($a.attr('href')).to.equal('http://swagger.io')
  })
  it('operation should contain an external document link to swagger.io', function () {
    var $a = context.$('#operation--pet-post .panel-body section.sw-operation-external-docs a.sw-external-doc')

    expect($a.text()).to.equal('Find out more')
    expect($a.attr('href')).to.equal('http://swagger.io')
  })
  it('tag should contain an external document link to swagger.io', function () {
    var $a = context.$('#tag-pet').next().next('p.sw-tag-external-doc').find('a.sw-external-doc')

    expect($a.text()).to.equal('Find out more')
    expect($a.attr('href')).to.equal('http://swagger.io')
  })
  it('external document w/o description must use url as description', function () {
    var $a = context.$('#tag-withoutDescription').next().next('p.sw-tag-external-doc').find('a.sw-external-doc')

    expect($a.text()).to.equal('http://swagger.io')
    expect($a.attr('href')).to.equal('http://swagger.io')
  })
})
