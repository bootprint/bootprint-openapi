module.exports = {
  'swagger--collection-format': function (value, paramName) {
    return {
      'csv': 'comma separated (`' + paramName + '=aaa,bbb`)',
      'ssv': 'space separated (`' + paramName + '=aaa bbb`)',
      'tsv': 'tab separated (`' + paramName + '=aaa\\tbbb`)',
      'pipes': 'pipe separated (`' + paramName + '=aaa|bbb`)',
      'multi': 'multiple parameters (`' + paramName + '=aaa&' + paramName + '=bbb`)'
    }[value]
  },
  'swagger--response-code': function (code) {
    // Comments refer to the section number in rfc2616
    // If no section number specified, it's documented in other rfcs.
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
      '207': 'Multi-status',
      '208': 'Already Reported',
      '226': 'IM Used',
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
      '421': 'Misdirected Request',
      '422': 'Unprocessable Entity',
      '423': 'Locked',
      '424': 'Failed Dependency',
      '426': 'Upgrade Required',
      '428': 'Precondition Required',
      '429': 'Too Many Requests',
      '431': 'Request Header Fields Too Large',
      '500': 'Internal Server Error', // 10.5.1
      '501': 'Not Implemented', // 10.5.2
      '502': 'Bad Gateway', // 10.5.3
      '503': 'Service Unavailable', // 10.5.4
      '504': 'Gateway Timeout', // 10.5.5
      '505': 'HTTP Version Not Supported', // 10.5.6
      '506': 'Variant Also Negotiates',
      '507': 'Insufficient Storage',
      '508': 'Loop Detected',
      '510': 'Not Extended',
      '511': 'Network Authentication Required'
    }[code]
  }
}
