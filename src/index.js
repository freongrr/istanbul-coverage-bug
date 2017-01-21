"use strict";

function extractMessage(error) {
    return error.message || error.toString();
}

module.exports = function(error) {
    return extractMessage(error);
}
