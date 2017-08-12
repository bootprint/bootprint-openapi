var _ = require('lodash')

var httpMethods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch']

// Preprocessor for the swagger-json, so that some of the logic can be taken out of the
// template

module.exports = function (swaggerJson) {
  const copy = _.cloneDeep(swaggerJson)
  return copy
}
