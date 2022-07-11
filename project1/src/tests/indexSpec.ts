const myFunc = () => 5 * 5;


describe("Spec for Index Utility", ()=>{
    it('expect myFunc() equal to 25', () => {
        expect(myFunc()).toEqual(25);
    });     
})