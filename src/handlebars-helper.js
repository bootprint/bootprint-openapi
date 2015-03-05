var Handlebars = require("handlebars");
var marked = require("marked");
var cheerio = require("cheerio");
var highlight = require('highlight.js');


highlight.configure({
    "useBR": true
})

marked.setOptions({
    highlight: function (code,name) {

        var highlighted;
        if (name) {
            highlighted =  highlight.highlight(name,code).value;
        } else {
            highlighted = highlight.highlightAuto(code).value;
        }
        var result = highlight.fixMarkup(highlighted);
        return result;
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
            return this.items.type+"[]";
        }
        return value;
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
    }
};


