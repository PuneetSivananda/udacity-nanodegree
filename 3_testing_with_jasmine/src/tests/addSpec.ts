import { addArr } from "../utilities/arrays"

describe("Spec for array utilities", ()=>{
    it("it should add content of array", ()=>{
        expect(addArr([3, 5])).toBe(8)
    })
})