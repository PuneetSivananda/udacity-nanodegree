"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
it("expect myFunc(5) equal to 25", () => {
    expect((0, index_1.default)(5)).toEqual(25);
});
it("expect myFunc(5) toBe 25", () => {
    expect((0, index_1.default)(5)).toBe(25);
});
it("expect myFunc(5) toBe 25", () => {
    expect((0, index_1.default)(0)).not.toBeTruthy();
});
it("tobe close to 45", () => {
    expect((0, index_1.default)(8.9)).toBeCloseTo(45, 0);
});
