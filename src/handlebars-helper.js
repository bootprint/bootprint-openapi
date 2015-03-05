var Handlebars = require("handlebars");
var marked = require("marked");
var cheerio = require("cheerio");

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
        var $ = cheerio.load(marked(value));
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
        var schemaString = require("json-stable-stringify")(value, {space: 1});
        var highlighted = schemaString.replace(/"(#\/definitions\/.*)"/g,"<a href='$1'>$1</a>");

        return new Handlebars.SafeString('<pre>'+highlighted+'</pre>');
    }
};


