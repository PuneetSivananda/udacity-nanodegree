import supertest from "supertest"
import app from "../index"

const request = supertest(app)

describe("Spec for Testing endpoint responses", ()=>{
    it('tests ping endpoint will return 200 status code', async (done) => {
        const response = await request.get("/ping")
        expect(response.status).toBe(200)
        done();
    });     
})