import {expect} from "chai";
import BuggyCoverage from "../src/BuggyCoverage";

describe("BuggyCoverage", () => {

    it("shows the error message", () => {
        const o = new BuggyCoverage(new Error("BOOM"));
        expect(o.render()).to.equal("<div>BOOM</div>");
    });
});
