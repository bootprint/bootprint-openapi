var loadPartials = require("../src/read-partials.js");
var path = require("path");
var deep = require("q-deep");

var partial = "../templates/partials";
var prefix = "abc";

module.exports.testPartials = function (test) {
    test.expect(1);
    deep(loadPartials({
        "num": [path.join(__dirname, "testPartials1"), path.join(__dirname, "testPartials2")],
        "letter": [path.join(__dirname, "testPartialsA")],
        "directFile": [path.join(__dirname, "testPartialsA","vier.hbs")]
    })).done(function (result) {
        test.deepEqual(result, {
                'num/eins': 'Eins',
                'num/zwei': 'Two',
                'num/drei': 'Three',
                'letter/vier': 'Vier',
                "directFile" : 'Vier'
            }
        );
        test.done();
    });
};
