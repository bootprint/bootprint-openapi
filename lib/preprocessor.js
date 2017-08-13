var _ = require('lodash')

var httpMethods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch']

// Preprocessor for the swagger-json, so that some of the logic can be taken out of the
// template

function preprocessor (swaggerJson) {
  swaggerJson = _.cloneDeep(swaggerJson)
  swaggerJson.taggedOperations = operationsByTag(swaggerJson.tags, swaggerJson.paths)
  swaggerJson.untaggedOperations = untaggedOperations(swaggerJson.paths)
  return swaggerJson
}

/**
 * Return a copy of the tags object, enhanced by the implicit tags defined in operations.
 * Operations without tag are ignore by this method.
 * The returned array contains one Tag Object for each explicit and implicit tag.
 * In addition to name (and optional description), the object has a property "paths" that
 * contains a Path Object with exactly the Operations that belong to the given tag
 * @param {{name: string, description: string}[]} tags the Tags Object
 * @param {object} paths the paths object
 */
function operationsByTag (tags, paths) {
  const result = []
  const byTagName = {}

  if (tags != null) {
    // Collect explicit tags
    tags.forEach((tagObject) => {
      const tagCopy = Object.assign({paths: {}}, tagObject)
      result.push(tagCopy)
      byTagName[tagObject.name] = tagCopy
    })
  }

  // Add implicit tags
  forEachOperation(paths, (operation, path, method) => {
    if (operation.tags && operation.tags.length > 0) {
      operation.tags.forEach((tag) => {
        // ensure that tag object exists
        if (byTagName[tag] == null) {
          let newTagObject = {name: tag, paths: {}}
          byTagName[tag] = newTagObject
          result.push(newTagObject)
        }
        addToPathsObject(byTagName[tag].paths, operation, path, method)
      })
    }
  })

  // Remove empty path objects (for better handling in the template)
  result.forEach((tagObject) => {
    if (Object.keys(tagObject.paths).length === 0) {
      delete tagObject.paths
    }
  })
  return result
}

/**
 * Return a Paths Object that only contains the Operations without tags
 * @param {object} paths
 * @return {object} a new Paths object with only the untagged operations
 */
function untaggedOperations (paths) {
  const result = {}
  // Add implicit tags
  forEachOperation(paths, (operation, path, method) => {
    if (!operation.tags || operation.tags.length === 0) {
      addToPathsObject(result, operation, path, method)
    }
  })
  return result
}

/**
 * Calls the iterator function for each path in the document
 * @param {object} pathsObject the Paths Object
 * @param {function(operation:object, path:string, method: string)} iterator
 */
function forEachOperation (pathsObject, iterator) {
  Object.keys(pathsObject).forEach((path) => {
    httpMethods.forEach((method) => {
      let operation = pathsObject[path][method]
      if (operation) {
        iterator(operation, path, method)
      }
    })
  })
}

/**
 * Adds an operation to a paths object
 * @param {object} paths the Paths Object
 * @param {object} operation the operation to add to the Paths Object
 * @param {string} path the path of the operation
 * @param {string method the method of the operation
 */
function addToPathsObject (paths, operation, path, method) {
  // ensure path in paths-property
  if (paths[path] == null) {
    paths[path] = {}
  }

  // add operation
  paths[path][method] = operation
}

module.exports = preprocessor
module.exports.forEachPath = forEachOperation
module.exports.operationsByTag = operationsByTag
module.exports.untaggedOperations = untaggedOperations
