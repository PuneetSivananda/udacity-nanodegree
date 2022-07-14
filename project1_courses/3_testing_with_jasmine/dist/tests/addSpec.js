"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = require("../utilities/arrays");
describe("Spec for array utilities", () => {
    it("it should add content of array", () => {
        expect((0, arrays_1.addArr)([3, 5])).toBe(8);
    });
    it("it should concatenate 2 arrays", () => {
        expect((0, arrays_1.concatArr)([1, 2], [3, 4])).toEqual(jasmine.anything());
    });
    it("it should concatenate 2 arrays and return this value", () => {
        const mixArr = [1, 2, "three", "four"];
        expect((0, arrays_1.concatArr)([1, 2], ["three", "four"])).toEqual(jasmine.arrayContaining(mixArr));
    });
});
