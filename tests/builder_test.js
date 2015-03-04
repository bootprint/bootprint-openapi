var _ = require("lodash");
var assert = require("assert");

module.exports.testBuilder = function(test) {
    test.expect(4);
    var initialValue = {"c": 3};
    var config = require("../src/builder.js")(initialValue);

    config.override({a: 1});
    test.deepEqual(_.omit(config._options, "override"), {a: 1, c: 3});

    config.override({a: 2, b: [1, 2, 3]});
    test.deepEqual(_.omit(config._options, "override"), {c: 3, a: 2, b: [1, 2, 3]});

    config.override({b: [4, 5, 6]});
    test.deepEqual(_.omit(config._options, "override"), {c: 3, a: 2, b: [1, 2, 3, 4, 5, 6]});

    // Initial config value must not have changed
    test.deepEqual(initialValue, {c:3});
    test.done();
};

