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

describe('The petstore example', function () {
  this.timeout(10000)
  var context = {}
  before(function () {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it("should contain 'Pet' as request body spec for /pet-POST", function () {
    expect(context.$('#operation--pet-post div.sw-request-model a.json-schema-ref').text())
      .to.equal('Pet')
  })

  it("should contain a summary item '/pet' linking to '#operation--pet-post'", function () {
    expect(context.$(".swagger--summary a[href='#operation--pet-post']").text()).to.equal('POST /pet')
  })

  it("should contain an path item '/pet' with id 'path--pet'", function () {
    expect(context.$('#path--pet').length).to.equal(1)
  })

  it("should contain a tag-based summary for the tag 'pet'", function () {
    expect(context.$('#tag-pet').length).to.equal(1)
  })

  function responseHeader () {
    return context.$('#operation--user-login-get .sw-response-200 .sw-response-header-X-Rate-Limit')
  }

  describe("should contain a response-header X-Rate-Limit in the operation GET /user/login/' that ", function () {
    /**
     * Response hedare or user .login
     * @returns {*}
     */

    it('exists', function () {
      expect(responseHeader().length).to.equal(1)
    })

    it('has the correct name', function () {
      expect(responseHeader().text()).to.contain('X-Rate-Limit')
    })

    it('has the correct description', function () {
      expect(responseHeader().text()).to.contain('calls per hour allowed by the user')
    })
    it('has the correct datatype', function () {
      expect(responseHeader().text()).to.match(/integer\s+\(int32\)/)
    })
  })
})
