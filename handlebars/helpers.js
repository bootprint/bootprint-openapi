/* eslint-disable camelcase */

const _ = require('lodash')
const highlight = require('highlight.js')

highlight.configure({
  'useBR': true
})

module.exports = {
  openapi__resolve_ref,
  openapi__subschema_name,
  openapi__collection_format,
  openapi__response_code,
  openapi__example
}

/**
 * Extract then name of a subschema from a $ref property
 * @param {string} url
 * @returns {*}
 * @access public
 * @memberOf helpers
 */
function openapi__subschema_name (url) {
  return url.replace('#/definitions/', '')
}

/**
 * Resolve a (local) json-schema-
 * @param {string} reference
 * @access public
 * @memberOf helpers
 */
function openapi__resolve_ref (reference, options) {
  reference = reference.trim()
  if (reference.lastIndexOf('#', 0) < 0) {
    // eslint-disable-next-line no-console
    console.warn('Remote references not supported yet. Reference must start with "#" (but was ' + reference + ')')
    return {}
  }
  var components = reference.split('#')
  // var url = components[0]
  var hash = components[1]
  var hashParts = hash.split('/')
  // TODO : Download remote json from url if url not empty
  var current = options.data.root
  hashParts.forEach(function (hashPart) {
    // Traverse schema from root along the path
    if (hashPart.trim().length > 0) {
      if (typeof current === 'undefined') {
        throw new Error('Reference \'' + reference + '\' cannot be resolved. \'' + hashPart + '\' is undefined.')
      }
      current = current[hashPart]
    }
  })
  return current
}

function openapi__collection_format (value, paramName) {
  return {
    'csv': 'comma separated (`' + paramName + '=aaa,bbb`)',
    'ssv': 'space separated (`' + paramName + '=aaa bbb`)',
    'tsv': 'tab separated (`' + paramName + '=aaa\\tbbb`)',
    'pipes': 'pipe separated (`' + paramName + '=aaa|bbb`)',
    'multi': 'multiple parameters (`' + paramName + '=aaa&' + paramName + '=bbb`)'
  }[value]
}

function openapi__response_code (code) {
  // Comments refer to the section number in rfc2616
  // If an rfc number is specified, the code is
  // documented in the specified rfc.
  return {
    '100': 'Continue', // 10.1.1
    '101': 'Switching Protocols', // 10.1.2
    '200': 'OK', // 10.2.1
    '201': 'Created', // 10.2.2
    '202': 'Accepted', // 10.2.3
    '203': 'Non-Authoritative Information', // 10.2.4
    '204': 'No Content', // 10.2.5
    '205': 'Reset Content', // 10.2.6
    '206': 'Partial Content', // 10.2.7
    '207': 'Multi-status', // rfc4918, 11.1
    '208': 'Already Reported', // rfc5842, 7.1
    '226': 'IM Used', // rfc3229, 10.4.1
    '300': 'Multiple Choices', // 10.3.1
    '301': 'Moved Permanently', // 10.3.2
    '302': 'Found', // 10.3.3
    '303': 'See Other', // 10.3.4
    '304': 'Not Modified', // 10.3.5
    '305': 'Use Proxy', // 10.3.6
    '306': '(Unused)', // 10.3.7
    '307': 'Temporary Redirect', // 10.3.8
    '400': 'Bad Request', // 10.4.1
    '401': 'Unauthorized', // 10.4.2
    '402': 'Payment Required', // 10.4.3
    '403': 'Forbidden', // 10.4.4
    '404': 'Not Found', // 10.4.5
    '405': 'Method Not Allowed', // 10.4.6
    '406': 'Not Acceptable', // 10.4.7
    '407': 'Proxy Authentication Required', // 10.4.8
    '408': 'Request Timeout', // 10.4.9
    '409': 'Conflict', // 10.4.10
    '410': 'Gone', // 10.4.11
    '411': 'Length Required', // 10.4.12
    '412': 'Precondition Failed', // 10.4.13
    '413': 'Request Entity Too Large', // 10.4.14
    '414': 'Request-URI Too Long', // 10.4.15
    '415': 'Unsupported Media Type', // 10.4.16
    '416': 'Requested Range Not Satisfiable', // 10.4.17
    '417': 'Expectation Failed', // 10.4.18
    '421': 'Misdirected Request', // rfc7540, 9.1.2
    '422': 'Unprocessable Entity', // rfc4918, 11.2
    '423': 'Locked', // rfc4918, 11.3
    '424': 'Failed Dependency', // rfc4918, 11.4
    '426': 'Upgrade Required', // rfc2817, 6
    '428': 'Precondition Required', // rfc6585, 3
    '429': 'Too Many Requests', // rfc6585, 4
    '431': 'Request Header Fields Too Large', // rfc6585, 5
    '500': 'Internal Server Error', // 10.5.1
    '501': 'Not Implemented', // 10.5.2
    '502': 'Bad Gateway', // 10.5.3
    '503': 'Service Unavailable', // 10.5.4
    '504': 'Gateway Timeout', // 10.5.5
    '505': 'HTTP Version Not Supported', // 10.5.6
    '506': 'Variant Also Negotiates',
    '507': 'Insufficient Storage', // rfc4918, 11.5
    '508': 'Loop Detected', // rfc5842, 7.2
    '510': 'Not Extended', // rfc2774, 7
    '511': 'Network Authentication Required' // rfc6585, 6
  }[code]
}

/**
 * Render the value of an [Example object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#exampleObject)
 *
 * * If the mime-type is `application/json`, and the example is an object,
 *   it will be stringified
 *
 * * If the mime-type is `application/xml`, and the example is an object,
 *   the json should be converted to XML (which is not the case at the moment
 *   TODO, help wanted)
 *
 * @param {any} example the value of an [Example Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#exampleObject)
 * @param {string} mimeType the mime-type of this example
 */

function openapi__example (example, mimeType, options) {
  if (_.isObject(example)) {
    switch (mimeType) {
      case 'application/json':
        example = require('json-stable-stringify')(example, {space: 4})
        break
      case 'application/xml':
        // TODO: This should actually convert the example to XML but I don't know how yet. "help wanted"
        example = require('json-stable-stringify')(example, {space: 4})
        break
    }
  }
  var highlighted = highlight.highlightAuto(String(example)).value
  var fixMarkup = highlight.fixMarkup(highlighted)
  return new options.customize.engine.SafeString('<pre>' + fixMarkup + '</pre>')
}
