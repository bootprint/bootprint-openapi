/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */
/* global describe */
/* global it */
/* global expect */
/* global beforeAll */
var fs = require('fs')
var cheerio = require('cheerio')

describe('The petstore example', function () {
  var $ = null
  beforeAll(function (done) {
    require('bootprint')
      .load(require('../'))
      .build('spec/fixtures/petstore.json', 'test-output')
      .generate()
      .done(function () {
        fs.readFile('test-output/index.html', {
          encoding: 'utf-8'
        }, function (err, data) {
          if (err) {
            done(err)
          }
          $ = cheerio.load(data)
          done()
        })
      })

  })

  it("should contain 'Pet' as request body spec for /pet-POST", function () {
    expect($('#operation--pet-post div.sw-request-model a.json-schema-ref').text())
      .toBe('Pet')
  })

  it("should contain an summary item '/pet' linking to '#path--pet'", function () {
    expect($(".swagger--summary-path a[href='#path--pet']").text()).toBe('/pet')
  })

  it("should contain an path item '/pet' with id 'path--pet'", function () {
    expect($('#path--pet').length).toBe(1)
  })
})
