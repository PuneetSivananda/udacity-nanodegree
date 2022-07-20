import {capitalize} from "../utilities/strings"

describe("Spec for string utilities", ()=>{
    it("it should the capitalize given text", ()=>{
        expect(capitalize('the quick brown fox')).toBe("The Quick Brown Fox")
    })
})