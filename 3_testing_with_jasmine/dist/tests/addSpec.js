"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = require("../utilities/arrays");
describe("Spec for array utilities", () => {
    it("it should add content of array", () => {
        expect((0, arrays_1.addArr)([3, 5])).toBe(8);
    });
});
