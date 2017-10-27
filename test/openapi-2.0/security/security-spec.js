/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* eslint-env mocha */
const expect = require('chai').expect
const tester = require('bootprint-unit-testing')

describe('OpenAPI 2.0: The paths spec', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, './swagger.yaml')
  before(bptest.run)

  it('should render all defined security definitions', function () {
    expect(bptest.$('#security-definition-basicAuth').length).to.equal(1)
    expect(bptest.$('#security-definition-headerToken').length).to.equal(1)
    expect(bptest.$('#security-definition-oauthApplication').length).to.equal(1)
  })

  it('should render the security definition type', function () {
    expect(bptest.textIn('#security-definition-basicAuth [data-oai-keywords="type"]')).to.equal('Type: basic')
  })

  it('should render the parameter name', function () {
    expect(bptest.textIn('#security-definition-headerToken [data-oai-keywords="name"]')).to.equal('Name: authToken')
  })

  it('should render the parameter location', function () {
    expect(bptest.textIn('#security-definition-headerToken [data-oai-keywords="in"]')).to.equal('Location: header')
    expect(bptest.textIn('#security-definition-queryToken [data-oai-keywords="in"]')).to.equal('Location: query')
  })

  it('should render oauth2-flow', function () {
    expect(bptest.textIn('#security-definition-oauthAccessCode [data-oai-keywords="flow"]')).to.equal('Flow: accessCode')
  })

  it('should render the authorization url', function () {
    expect(bptest.textIn('#security-definition-oauthAccessCode [data-oai-keywords="authorizationUrl"]')).to.equal('Authorization-Url: http://example.com/authorize')
  })

  it('should render the token url', function () {
    expect(bptest.textIn('#security-definition-oauthAccessCode [data-oai-keywords="tokenUrl"]')).to.equal('Token-Url: http://example.com/token')
  })

  it('should render the scopes-section if present', function () {
    expect(bptest.textIn('#security-definition-oauthAccessCode')).to.match(/Scopes/)
  })

  it('should not render the scopes-section if not present', function () {
    expect(bptest.textIn('#security-definition-basicAuth')).not.to.match(/Scopes/)
  })

  it('should not render all scopes with description', function () {
    expect(bptest.textIn('#security-definition-oauthAccessCode .scopes [data-scope-name="read:user"]')).to.equal('read:user Read access to user data')
    expect(bptest.textIn('#security-definition-oauthAccessCode .scopes [data-scope-name="write:user"]')).to.equal('write:user Write access to user data')
  })
})
