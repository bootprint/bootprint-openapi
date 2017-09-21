/* eslint-env mocha */

const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect
const Handlebars = require('handlebars')
const helpers = require('../handlebars/helpers')

describe('Helpers:', function () {
  describe('The "openapi__operations" helper:', function () {
    it('should return a list of all operations in the Path Item Object, including the path and the method', function () {
      return expect(helpers.openapi__operations(
        '/users/{id}',
        {
          get: {summary: 'get'},
          post: {summary: 'post'},
          put: {summary: 'put'},
          'delete': {summary: 'delete'},
          patch: {summary: 'patch'},
          options: {summary: 'options'},
          head: {summary: 'head'},
          parameters: [{name: 'id'}]
        }
      )).to.deep.equal([
        {'method': 'delete', 'operation': {'summary': 'delete'}, 'path': '/users/{id}'},
        {'method': 'get', 'operation': {'summary': 'get'}, 'path': '/users/{id}'},
        {'method': 'head', 'operation': {'summary': 'head'}, 'path': '/users/{id}'},
        {'method': 'options', 'operation': {'summary': 'options'}, 'path': '/users/{id}'},
        {'method': 'patch', 'operation': {'summary': 'patch'}, 'path': '/users/{id}'},
        {'method': 'post', 'operation': {'summary': 'post'}, 'path': '/users/{id}'},
        {'method': 'put', 'operation': {'summary': 'put'}, 'path': '/users/{id}'}
      ])
    })
  })

  describe('The openapi__path_variables helper', function () {
    it('should extract path variables from a path pattern', function () {
      expect(helpers.openapi__path_variables('/users/{id}')).to.deep.equal(['id'])
    })

    it('should extract multiple path variables in the same order as they appear in the pattern', function () {
      expect(helpers.openapi__path_variables('/users/{zwang}/{id}/{ywong}')).to.deep.equal(['zwang', 'id', 'ywong'])
    })

  })
})
