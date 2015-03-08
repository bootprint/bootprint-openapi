var _ = require("lodash");

// Preprocessor for the swagger-json, so that some of the logic can be taken out of the
// template

module.exports = function (swaggerJson) {

    var copy = _.cloneDeep(swaggerJson);

    // The "body"-parameter in each operation is stored in a
    // separate field "_request_body".
    _.values(copy.paths).forEach(function (path) {
        _.values(path).forEach(function (operation) {
            if (operation.parameters) {
                operation.parameters = operation.parameters.filter(function (param) {
                    if (param.in === "body") {
                        operation._request_body = param;
                        return false;
                    }
                    return true;
                });
            }
        });
    });
    return copy;
};