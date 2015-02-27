var Handlebars = require("handlebars");
var marky = require("marky-markdown");

module.exports = {
    'toUpperCase': function (value) {
        if (value) {
            return new Handlebars.SafeString(value.toUpperCase());
        } else {
            return '';
        }
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
        var $ = marky(value);
        return new Handlebars.SafeString(strip ? $("p").html() : $.html());
    },
    "datatype": function (value) {
        if (value==="array") {
            return this.items+"[]";
        }
        return value;
    },
    "json": function (value) {
        if (!value) {
            return "";
        }
        var schemaString = require("json-stable-stringify")(value, {space: 4});
        var $ = marky("```json\n" + schemaString + "\n```");
        var definitions = $('span:not(:has(span)):contains("#/definitions/")');
        definitions.each(function(index,item) {
            var ref = $(item).html()
            // TODO: This should be done in a template
            $(item).html("<a href="+ref+">"+ref+"</a>");
        })

        return new Handlebars.SafeString($("pre").html());
    }
}


