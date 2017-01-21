"use strict";

module.exports = function(error) {
    return error.message || error.toString();
}

function otherFunction() {
    return "foo";
}
