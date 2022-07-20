"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strings_1 = require("../utilities/strings");
describe("Spec for string utilities", () => {
    it("it should the capitalize given text", () => {
        expect((0, strings_1.capitalize)('the quick brown fox')).toBe("The Quick Brown Fox");
    });
});
