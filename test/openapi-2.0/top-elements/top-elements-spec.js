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

describe('OpenAPI 2.0: Top-Elements and Navgation', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, './swagger.yaml')
  const keywordsAndLabels = {
    'paths': 'Paths',
    'definitions': 'Definitions',
    'parameters': 'Parameters',
    'responses': 'Responses',
    'securityDefinitions': 'Security Definitions',
    'security': 'Security',
    'tags': 'Tags'
  }
  before(bptest.run)

  Object.keys(keywordsAndLabels).forEach((keyword) => {
    const label = keywordsAndLabels[keyword]
    it(`should contain a link to the section "${keyword}" in the navigation with label "${label}"`, function () {
      expect(bptest.textIn(`#openapi--header a[href="#${keyword}"]`)).to.equal(label)
    })

    it(`should contain the section "${keyword}" with label "${label}"`, function () {
      expect(bptest.textIn(`#${keyword}`)).to.equal(label)
    })
  })

  it('should contain links and sections in the same order', function () {
    var links = Object.keys(keywordsAndLabels).map((keyword) => `#openapi--header a[href="#${keyword}"]`).join(', ')
    var sections = Object.keys(keywordsAndLabels).map((keyword) => `#${keyword}`).join(', ')
    expect(bptest.textIn(links)).to.equal(bptest.textIn(sections))
  })

  it('should include a schemes-table', function () {
    expect(bptest.textIn('#schemes-host-path')).to.equal('Schemes Host Base-Path http https localhost:8080 /basePath')
  })

  it('should include an externalDocs-link', function () {
    expect(bptest.textIn('#externalDocs')).to.equal('see http://www.example.com/ Some external doc')
  })

  it('should include an default "produces" section', function () {
    expect(bptest.textIn('#produces')).to.equal('Produces (default) application/json')
  })

  it('should include an default "consumes" section', function () {
    expect(bptest.textIn('#consumes')).to.equal('Consumes (default) application/json')
  })
})
