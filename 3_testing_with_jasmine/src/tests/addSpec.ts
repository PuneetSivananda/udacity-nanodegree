import { lgNum, cut3, addArr, concatArr, StringArrOrNumberArr } from "../utilities/arrays"

describe("Spec for array utilities", ()=>{
    it("it should add content of array", ()=>{
        expect(addArr([3, 5])).toBe(8)
    })

    it("it should concatenate 2 arrays", ()=>{
        expect(concatArr([1, 2], [3, 4])).toEqual(jasmine.anything())
    })

    it("it should concatenate 2 arrays and return this value", ()=>{
        const mixArr = [1, 2, "three", "four"]
        expect(concatArr([1, 2], ["three", "four"])).toEqual(jasmine.arrayContaining(mixArr))
    })
})