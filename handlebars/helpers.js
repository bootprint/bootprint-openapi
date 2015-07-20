module.exports = {
  'swagger--collection-format': function (value) {
    return {
      'csv': 'comma separated (`foo,bar`)',
      'ssv': 'space separated (`foo bar`)',
      'tsv': 'tab separated (`foo\\tbar`)',
      'pipes': 'pipe separated (`foo|bar`)',
      'multi': 'multiple parameters (`foo=bar&foo=baz`)'
    }[value]
  }
}
