import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Spec for Testing Ping endpoints', () => {
  it('tests ping endpoint will return 200 status code', async () => {
    const response = await request.get('/api/v1/ping')
    expect(response.status).toEqual(200)
  });

  it("tests the response for the ping router", async ()=>{
    const response = await request.get("/api/v1/ping")
    expect(response.body.ping).toEqual("pong")
  })
});


describe('Spec for Testing Image Endpoints', () => {
  it('tests ping endpoint will return 200 status code', async () => {
    const response = await request.get('/api/v1/ping')
    expect(response.status).toEqual(200)
  });
});
