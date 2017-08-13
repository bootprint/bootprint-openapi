/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* eslint-env mocha */
var expect = require('chai').expect
var preprocessor = require('../lib/preprocessor')

describe('preprocessor methods:', function () {
  describe('the operationsByTag function', function () {
    it('should add paths to existing tags', function () {
      return expect(preprocessor.operationsByTag(
        [ // tags
          {'name': 'tag1', 'description': 'First tag'},
          {'name': 'tag2', 'description': 'Second tag'}
        ],
        {
          '/users': {
            'get': {summary: 'Get users', tags: ['tag1', 'tag2']},
            'post': {summary: 'Post users', tags: ['tag1']}
          }
        }
      )).to.deep.equal([
        {
          'name': 'tag1',
          'description': 'First tag',
          'paths': {
            '/users': {
              'get': {summary: 'Get users', tags: ['tag1', 'tag2']},
              'post': {summary: 'Post users', tags: ['tag1']}
            }
          }
        },
        {
          'name': 'tag2',
          'description': 'Second tag',
          'paths': {
            '/users': {
              'get': {summary: 'Get users', tags: ['tag1', 'tag2']}
            }
          }
        }
      ])
    })

    it('should add implicit tags', function () {
      return expect(preprocessor.operationsByTag(
        [ // tags
          {'name': 'tag1', 'description': 'First tag'},
          {'name': 'tag2', 'description': 'Second tag'}
        ],
        {'/users': {'get': {summary: 'Get users', tags: ['tag3']}}}
      )).to.deep.equal([
        {'name': 'tag1', 'description': 'First tag'},
        {'name': 'tag2', 'description': 'Second tag'},
        {
          'name': 'tag3',
          'paths': {'/users': {'get': {summary: 'Get users', tags: ['tag3']}}}
        }
      ])
    })

    it('should add multiple paths and multiple methods tags', function () {
      return expect(preprocessor.operationsByTag(
        [ // tags
          {'name': 'tag1', 'description': 'First tag'}
        ],
        {
          '/users': {
            'get': {summary: 'Get users', tags: ['tag1']},
            'post': {summary: 'Post users', tags: ['tag1']}
          },
          '/dogs': {
            'get': {summary: 'Get dogs', tags: ['tag1']},
            'post': {summary: 'Post dogs', tags: ['tag1']}
          }
        }
      )).to.deep.equal([
        {
          'name': 'tag1',
          'description': 'First tag',
          'paths': {
            '/users': {
              'get': {summary: 'Get users', tags: ['tag1']},
              'post': {summary: 'Post users', tags: ['tag1']}
            },
            '/dogs': {
              'get': {summary: 'Get dogs', tags: ['tag1']},
              'post': {summary: 'Post dogs', tags: ['tag1']}
            }
          }
        }
      ])
    })

    it('should ignore untagged operations', function () {
      return expect(preprocessor.operationsByTag(
        [ // tags
          {'name': 'tag1', 'description': 'First tag'}
        ],
        {
          '/users': {
            'get': {summary: 'Get users', tags: []},
            'post': {summary: 'Post users'}
          }
        }
      )).to.deep.equal([
        {'name': 'tag1', 'description': 'First tag'}
      ])
    })
  })

  describe('the untaggedOperations function', function () {
    it('should collect untagged operations', function () {
      return expect(preprocessor.untaggedOperations(
        {
          '/users': {
            'get': {summary: 'Get users', tags: []},
            'post': {summary: 'Post users', tags: ['tag1']}
          },
          '/dogs': {
            'get': {summary: 'Get dogs'},
            'post': {summary: 'Post dogs', tags: ['tag1']}
          }
        }
      )).to.deep.equal({
        '/dogs': {
          'get': {
            'summary': 'Get dogs'
          }
        },
        '/users': {
          'get': {
            'summary': 'Get users',
            'tags': []
          }
        }
      })
    })
  })
})
