import myFunc from "../index"

it("expect myFunc(5) equal to 25", ()=>{
    expect(myFunc(5)).toEqual(25)
})

it("expect myFunc(5) toBe 25", ()=>{
    expect(myFunc(5)).toBe(25)
})


it("expect myFunc(5) toBe 25", ()=>{
    expect(myFunc(0)).not.toBeTruthy()
})


it("tobe close to 45", ()=>{
    expect(myFunc(8.9)).toBeCloseTo(45, 0)
})

