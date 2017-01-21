"use strict";

export default class BuggyCoverage {

    constructor(error) {
        this.error = error;
    }

    render() {
        return "<div>" + this.errorMessage() + "</div>";
    }

    errorMessage() {
        return this.error.message || this.error.toString();
    }

    foo() {
        return "foo";
    }
}
