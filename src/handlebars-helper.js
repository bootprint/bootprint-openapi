// This module create handlbars-helpers for swagger-to-html

var Handlebars = require("handlebars");
var marked = require("marked");
var cheerio = require("cheerio");
var highlight = require('highlight.js');


highlight.configure({
    "useBR": true
});

marked.setOptions({
    highlight: function (code,name) {

        var highlighted;
        if (name) {
            highlighted =  highlight.highlight(name,code).value;
        } else {
            highlighted = highlight.highlightAuto(code).value;
        }
        return highlight.fixMarkup(highlighted);
    }
});

module.exports = {
    'toUpperCase': function (value) {
        if (value) {
            return new Handlebars.SafeString(value.toUpperCase());
        } else {
            return '';
        }
    },
    'eachSorted': function(context, options) {
        // https://gist.github.com/wiedi/fb09a0317e0db2caee6a
        var ret = "";
        Object.keys(context).sort().forEach(function(key) {
            ret = ret + options.fn({key: key, value: context[key]})
        }) ;
        return ret
    },
    'methodClass': function (value) {
        return {
            "post": "success",
            "put": "warning",
            "get": "info",
            "delete": "danger"
        }[value];
    },
    'md': function (value, strip) {
        if (!value) {
            return value;
        }
        var $ = cheerio.load(marked(value));
        return new Handlebars.SafeString(strip ? $("p").html() : $.html());
    },
    "datatype": dataType,
    // http://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional
    "ifeq": function(v1,v2,options) {

        if(v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    },
    "json": function (value) {
        if (!value) {
            return "";
        }
        var schemaString = require("json-stable-stringify")(value, {space: 4});

        var $ = cheerio.load(marked("```json\r\n" + schemaString + "\n```"));
        var definitions = $('span:not(:has(span)):contains("#/definitions/")');
        definitions.each(function(index,item) {
            var ref = $(item).html();
            // TODO: This should be done in a template
            $(item).html("<a href="+ref.replace(/&quot;/g,"")+">"+ref+"</a>");
        });

        return new Handlebars.SafeString($.html());
    },
    "ifcontains": function(array, object,options) {
        console.log(array);
        if (array && array.indexOf(object)>=0) {
            return options.fn(this);
        }
        return options.inverse(this);
    }
};

/**
 * Returns a descriptive string for a datatype
 * @param value
 * @returns {*}
 */
function dataType(value) {
    if (!value.type) {
        return "object";
    }
    if (value.type === "array") {
        if (!value.items) {
            return "array";
        }
        if (value.items.type) {
            return dataType(value.items) + "[]";
        } else {
            return "object[]";
        }
    }
    return value.type;
}


