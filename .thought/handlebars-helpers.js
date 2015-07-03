// Load bootprint
var bootprintConfig = require('bootprint').load(require('../'))._options;
var _ = require("lodash");

bootprintConfig.handlebars.partials.reduce(function(partials, dir) {

    return _.merge({}, partials, )
},{});

module.exports = {


}