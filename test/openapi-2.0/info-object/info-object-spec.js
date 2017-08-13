/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* eslint-env mocha */
const expect = require('chai').expect
const tester = require('bootprint-unit-testing')

describe('OpenAPI 2.0: The info-object spec', function () {
  this.timeout(20000)
  const bptest = tester(require('../../..'), __dirname, './swagger.yaml')
  before(bptest.run)

  it('should contain a title', function () {
    expect(bptest.textIn('[data-oai-keywords="info.title"]')).to.equal('Info-Object spec')
  })

  it('should contain a description', function () {
    expect(bptest.textIn('[data-oai-keywords="info.title"]')).to.equal('Info-Object spec')
  })

  it('should contain a license', function () {
    expect(bptest.textIn('[data-oai-keywords="info.license"]')).to.equal('License Information MIT https://opensource.org/licenses/MIT')
  })

  it('should contain a contact', function () {
    expect(bptest.textIn('[data-oai-keywords="info.contact"]')).to.equal('Contact information Nils Knappmeier http://blog.knappi.org npm@knappi.org')
  })

  it('should contain a termsOfService', function () {
    expect(bptest.textIn('[data-oai-keywords="info.termsOfService"]')).to.equal('Terms of Service http://example.com/terms')
  })
})
