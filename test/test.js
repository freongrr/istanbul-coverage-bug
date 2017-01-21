var expect = require("chai").expect;
var BuggyCoverage = require("../src/index.js");

describe("bug", () => {

    it("covers one branch of the binary expression", () => {
        const e = new Error("BOOM");
        expect(BuggyCoverage(e)).to.equal("BOOM");
    });
});
